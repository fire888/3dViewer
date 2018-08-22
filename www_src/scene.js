

export { sc } 

const sc = {
  init: () => createWebGl(),
  loadScene: ( v ) => loadNewScene( v ),
  hideModel: ( v ) => hideModel( v ),
  showModel: ( v ) => showModel( v ),
  transpModel: ( v ) => transpModel( v ), 
  redModel: ( v ) => redModel( v ),
  normalModel: ( v ) => normalModel( v ),    
}


/*******************************************************************/

let controls, scene, camera, renderer,
arrMeshes = [], arrLinks = []


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


/********************************************************************/

const hideModel = v => {
  let l = getLinkModelByName( v ) 
  l.geom.position.y = 10000
}


const showModel = v => {
  let l = getLinkModelByName( v ) 
  l.geom.position.y = 0
}


const transpModel = v => {
  let l = getLinkModelByName( v )  
  let m = new THREE.MeshPhongMaterial( { color: 0x999999, transparent: true, opacity: 0.3 } ) 
  for ( let i = 0; i < l.geom.children.length; i ++ ) {
    l.geom.children[ i ].material = m
  }   
}  


const redModel = v => {
  let l = getLinkModelByName( v )  
  let m = new THREE.MeshPhongMaterial( { color: 0xff0000, transparent: true, opacity: 1.0 } ) 
  for ( let i = 0; i < l.geom.children.length; i ++ ) {
    l.geom.children[ i ].material = m
  }   
} 


const normalModel = v => {
  console.log('!')
  let l = getLinkModelByName( v )  
  l.geom.setMaterials( l.mtl )
} 


const getLinkModelByName = v => {
  for ( let i = 0; i < arrMeshes.length; i ++  ) {
    if ( arrMeshes[ i ].name == v ) return arrMeshes[ i ] 
  }
} 