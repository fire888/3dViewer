

import { ui } from "./ui"
import { sc } from "./scene" 


/*******************************************************************/

window.onload = () => {
  if ( ! checkIsDataSCENES() ) return 
  let arrScenes = setIdIdendIficatorInScenes( SCENES )
  ui.init( getUiTreeData( arrScenes ) )
  sc.init( getPathToModelsData( arrScenes ) )
  setClickLoadScene()
  setClickHideModel()
  setClickShowModel()
  setClickTranspModel()
  setClickRedModel()
  setClickMtlModel()  
  setTimeout( () => { sc.loadNewScene( 0, ui.sceneStartLoad, ui.sceneLoadedOn ) }, 400 )
}



const checkIsDataSCENES = () => {
  if ( typeof SCENES != 'undefined' ) return true 
  alert( 'no data scenes' )
  return false 
}

const setIdIdendIficatorInScenes = arr => {
  let idModel = 0
  return arr.map( ( item, index ) => {
    item.idScene = index 
    for ( let key in item.models ) {
      item.models[ key ].idModel = idModel
      idModel ++
    }
    return item
  } )
}


/*******************************************************************/

const getUiTreeData = DATA => {
  let tree = setProjectsInUiTree( DATA )
  tree.forEach( ( proj ) => {
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
        { path: DATA[ index ].path },
        { idScene: DATA[ index ].idScene }
      ) 
    )
  } )
}

const setModelsInSceneTree = ( scene, DATA ) => {
  DATA.forEach( ( sceneDATA, index ) => {
    if ( sceneDATA.idScene != scene.idScene ) return
    scene.models = [] 
    for ( let key in sceneDATA.models ) {
      scene.models.push( Object.assign( {}, { name: key, idModel: sceneDATA.models[ key ].idModel } ) )
    }
  } )  
}



const getPathToModelsData = DATA => {
  let modelId = 0
  let arr = []
  DATA.forEach( ( sceneDATA, indexScene ) => {
    for ( let key in sceneDATA.models ) {
      arr.push( Object.assign(
        {},
        { 
          idScene: sceneDATA.idScene,
          path: sceneDATA.path,
          idModel: sceneDATA.models[ key ].idModel,           
          obj: sceneDATA.models[ key ].obj,
          mtl: sceneDATA.models[ key ].mtl          
        } 
      ) )
      modelId ++
    }
  } ) 
  return arr 
}


/*******************************************************************/

const setClickLoadScene = () => ui.setClickGetIdScene( 
  ( idScene ) => { 
    setTimeout( () => { 
      sc.loadNewScene( idScene, ui.sceneStartLoad, ui.sceneLoadedOn ) 
    }, 500 ) 
  }
)

const setClickHideModel = () => ui.setClickGetIdHideModel( ( idModel ) => sc.hideModel( idModel ) )
  
const setClickShowModel = () => ui.setClickGetIdShowModel( ( idModel ) => sc.showModel( idModel ) ) 

const setClickTranspModel = () => ui.setClickGetIdTranspModel( ( idModel ) => sc.transpModel( idModel ) ) 

const setClickRedModel = () => ui.setClickGetIdRedModel( ( idModel ) => sc.redModel( idModel ) ) 

const setClickMtlModel = () => ui.setClickGetNameMtlModel( ( idModel ) => sc.setMtlMaterial( idModel ) )


