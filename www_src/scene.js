export { sc } 

const sc = {
  createScene: () => createWebGl(),
  loadScene: ( v ) => loadNewScene( v )
}


/*******************************************************************/

let controls, scene, camera, renderer,
box,
objLoader = new THREE.OBJLoader(),
mtlLoader = new THREE.MTLLoader(),
model, mtl, arrMeshes = [], arrLinks = []


/*******************************************************************/

const createWebGl = () => {
    scene = new THREE.Scene()

    camera = new THREE.PerspectiveCamera( 10,	window.innerWidth / window.innerHeight, 3.5, 15000 )
    camera.position.set( -150, 200, 300 )
    camera.lookAt( scene.position )
    controls = new THREE.OrbitControls( camera )    
  
    let pointL = new THREE.PointLight( 0xffffff, 2.0 )
    pointL.position.set( -400, 300, 1600 )
    scene.add( pointL )
    let lightAmb = new THREE.AmbientLight( 0xadd6eb, 0.3 )
    scene.add( lightAmb )
  
    renderer = new THREE.WebGLRenderer( { alpha: true } )
    renderer.setPixelRatio( window.devicePixelRatio )
    renderer.setSize( window.innerWidth, window.innerHeight )
    document.body.appendChild( renderer.domElement ) 	
      
    drawFrame()
  }
  
  
const drawFrame = () => {  
  renderer.render( scene, camera )
  controls.update()
  requestAnimationFrame( drawFrame ) 
}


/*******************************************************************/

const loadNewScene = v => {
  removeOldScene()
  prepearArrLinks( v )
  addNewScene()
} 


const removeOldScene = () => {
  arrMeshes.forEach( ( item, index, arr ) => {
    scene.remove( item.geom ) 
    item.geom = null
    item.name = null
    item.mtl = null 
  } ) 
  arrMeshes = []
}


const prepearArrLinks = v => {
  arrLinks = []
  for ( let key in v.layers ) {
    arrLinks.push( Object.assign( {}, v.layers[ key ], { name: key } ) ) 
  }  
}


const addNewScene = () => {
  let c = 0
  startLoadModel( c )
}


const startLoadModel = c => {
  if ( c >= arrLinks.length ) return 
  
  loadModel( arrLinks[ c ] )
  c ++
  startLoadModel( c )
}   


const loadModel = v => {
  new THREE.MTLLoader().load( 'assets/' + v.mtl, ( materials ) => {
    let modelElems = {}
    modelElems.mtl = materials
    modelElems.mtl.preload()
    new THREE.OBJLoader()
      .setMaterials( modelElems.mtl )
      .load( 
        'assets/' + v.obj, 
        ( object ) => {
          modelElems.geom = object 
          scene.add( modelElems.geom )
          modelElems.name = v.name
          arrMeshes.push( modelElems ) 
        }, 
        () => {}, 
        () => {} 
      )
  } )  
}