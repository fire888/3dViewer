
import { ui } from "./ui"
import { sc } from "./scene" 


/*******************************************************************/

window.onload = () => {
  if ( ! checkIsDataSCENES() ) return 
  ui.init( getUiTreeData( SCENES ) )

  /*sc.init()
  loadStartModel()
  setClickLoadScene()
  setClickHideModel()
  setClickShowModel()
  setClickTranspModel()
  setClickRedModel()
  setClickNormalModel()  
  */
}


const checkIsDataSCENES = () => {
  if ( typeof SCENES != 'undefined' ) return true 
  alert( 'no data scenes' )
  return false 
}


/*******************************************************************/

const getUiTreeData = DATA => {
  let tree = setProjectsInUiTree( DATA )
  tree.forEach ( ( proj ) => {
    setScenesInProjectTree( proj, DATA ) 
    proj.scenes.forEach( ( scene ) => {
      setModelsInSceneTree( scene, DATA )
    } )
  } )
  return tree
} 

const setProjectsInUiTree = DATA => { 
  let arrProjects = []
  DATA.forEach( ( item, index ) => {
    let isProject = false  
    arrProjects.forEach( ( proj, index ) => {
      if ( item.project == proj.name  ) isProject = true
    } )
    if ( isProject == false ) arrProjects.push( Object.assign({}, { name: DATA[index].project }) )  
  } )
  return arrProjects
}  

const setScenesInProjectTree = ( proj, DATA ) => {
  proj.scenes = []
  DATA.forEach( ( item, index ) => {
    if ( item.project != proj.name ) return
    proj.scenes.push( 
      Object.assign( 
        {}, 
        { name: DATA[ index ].name },
        { path: DATA[ index ].path } 
      ) 
    )
  } )
}

const setModelsInSceneTree = ( scene, DATA ) => {
  DATA.forEach( ( sceneDATA, index ) => {
    if ( sceneDATA.name != scene.name ) return
    scene.models = [] 
    for ( let key in sceneDATA.models ) {
      scene.models.push( Object.assign({}, { name: key }) )
    }
  } )  
}


/*******************************************************************/

let currentSceneName = null

/*******************************************************************/

/*
const loadStartModel = () => {
  currentSceneName = 'Многобашенный замок'
  let scene = getSceneKey( currentSceneName  )
  sc.loadScene( scene )  
}


const setClickLoadScene = () => {
  ui.setClickGetNameScene( ( name ) => {
    currentSceneName = name
    let scene = getSceneKey( currentSceneName  )
    sc.loadScene( scene )
  } )
}


const setClickHideModel = () => {
  ui.setClickGetNameHideModel( ( layerName, sceneName ) => {
    if (  currentSceneName != sceneName ) return  
    sc.hideModel( layerName )
  } ) 
}


const setClickShowModel = () => {
  ui.setClickGetNameShowModel( ( layerName, sceneName ) => {
    if (  currentSceneName != sceneName ) return  
    sc.showModel( layerName )    
  } ) 
}


const setClickTranspModel = () => {
  ui.setClickGetNameTranspModel( ( layerName, sceneName ) => {
    if (  currentSceneName != sceneName ) return  
    sc.transpModel( layerName )    
  } ) 
}


const setClickRedModel = () => {
  ui.setClickGetNameRedModel( ( layerName, sceneName ) => {
    if (  currentSceneName != sceneName ) return  
    sc.redModel( layerName )    
  } ) 
}


const setClickNormalModel = () => {
  ui.setClickGetNameNormalModel( ( layerName, sceneName ) => {
    if (  currentSceneName != sceneName ) return  
    sc.normalModel( layerName )    
  } ) 
}
*/

/*******************************************************************/

const getSceneKey = v => {
  let s = null
  for ( let key in MODELS ) {
    if ( MODELS[ key ].name == v ) s = MODELS[ key ]
  }
  return s
} 









/*******************************************************************/

const getProj = () => {
  let arrProjects = []
  for ( let key in MODELS ) {
    let isInArray = false   
    arrProjects.forEach( ( item, index, arr ) => {
      arr[ index ] == MODELS[ key ].project ? isInArray = true : isInArray = false 
    }  )
    if ( isInArray == false ) arrProjects.push( MODELS[ key ].project ) 
  }
  return arrProjects
} 


const getScenes = n => {
  let arrScenes = []
  for ( let key in MODELS ) {   
    if ( n == MODELS[key].project ) arrScenes.push( MODELS[ key ].name ) 
  }  
  return arrScenes
}


const getImgPathPreviewScene = v => {
  let path = ''
  for ( let key in MODELS ) { 
    if ( MODELS[key].name == v ) path = MODELS[key].preview
  } 
  return path 
}


const getModels = v => {
  let layers = []
  for ( let key in MODELS ) { 
    if ( MODELS[ key ].name == v ) {
      for ( let l in MODELS[ key ].layers ) {
        layers.push( l ) 
      }
    }
  } 
  return layers
}



