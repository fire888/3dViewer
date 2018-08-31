

export { sc } 

/*******************************************************************/

const sc = {
  init: ( data ) => {
    ARR_MODELS = data 
    createWebGl()
  },
  loadScene: ( v ) => loadNewScene( v ),
  hideModel: ( v ) => hideModel( v ),
  showModel: ( v ) => showModel( v ),
  transpModel: ( v ) => transpModel( v ), 
  redModel: ( v ) => redModel( v ),
  normalModel: ( v ) => normalModel( v ),    
}


/*******************************************************************/

let ARR_MODELS 
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

const loadNewScene = idScene => {
  removeOldScene()
  arrLinks = prepearArrLinks( idScene, ARR_MODELS )
  addNewScene()
} 

const removeOldScene = () => {
  arrMeshes.forEach( ( item, index, arr ) => {
    scene.remove( item.geom ) 
    item.geom = null
    item.idModel = null
    item.mtl = null 
  } ) 
  arrMeshes = []
  arrLinks = []
}


const prepearArrLinks = ( idScene, DATA ) => {
  let arr = []
  for ( let i = 0; i < DATA.length; i ++  ) {
    if ( DATA[ i ].idScene == idScene ) {
      let item = Object.assign( 
        {}, 
        { 
          mtl: 'assets/' +  DATA[ i ].path + '/' +  DATA[ i ].mtl,
          obj: 'assets/' +  DATA[ i ].path + '/' +  DATA[ i ].obj,
          textures: 'assets/' + DATA[ i ].path + '/', 
          idModel:  DATA[ i ].idModel,
         } )
      arr.push( item )   
    }
  }   
  return arr
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
  new THREE.MTLLoader().setTexturePath( v.textures )
    .load( v.mtl, ( materials ) => {
      let modelElems = {}
      modelElems.mtl = materials
      modelElems.mtl.preload()
      new THREE.OBJLoader()
        .setMaterials( modelElems.mtl )
        .load( 
          v.obj, 
          ( object ) => {
            modelElems.geom = object 
            scene.add( modelElems.geom )
            modelElems.idModel = v.idModel
            arrMeshes.push( modelElems ) 
          }, 
        () => {}, 
        () => {} 
      )
  } )  
}


/********************************************************************/

const hideModel = id => {
  let l = getLinkModelById( id ) 
  l.geom.position.y = 10000
}


const showModel = id => {
  let l = getLinkModelById( id ) 
  l.geom.position.y = 0
}


const transpModel = id => {
  let l = getLinkModelById( id )  
  let m = new THREE.MeshPhongMaterial( { color: 0x999999, transparent: true, opacity: 0.3 } ) 
  for ( let i = 0; i < l.geom.children.length; i ++ ) {
    l.geom.children[ i ].material = m
  }   
}  


const redModel = id => {
  console.log('redModelScene:', id )
  let l = getLinkModelById( id )  
  let m = new THREE.MeshPhongMaterial( { color: 0xff0000, transparent: true, opacity: 1.0 } ) 
  for ( let i = 0; i < l.geom.children.length; i ++ ) {
    l.geom.children[ i ].material = m
  }   
} 

/*
const normalModel = v => {
  let l = getLinkModelByName( v )  
} 
*/

/*******************************************************************/


const getLinkModelById = v => {
  console.log( arrMeshes )
  for ( let i = 0; i < arrMeshes.length; i ++  ) {
    if ( arrMeshes[ i ].idModel == v ) return arrMeshes[ i ] 
  }
} 

/********************************************************************/


const addTestBox = () => { 
  scene.add( new THREE.Mesh(
    new THREE.BoxGeometry( 30, 30, 30 ),
    new THREE.MeshBasicMaterial( { color: 0xff0000 } ) 
  ) )
}