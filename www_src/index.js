
import { ui } from "./ui"
import { sc } from "./scene" 


/*******************************************************************/

window.onload = () => {
  ui.init()
  sc.init()

  loadStartModel()

  setClickLoadScene()
  setClickHideModel()
  setClickShowModel()
  setClickTranspModel()
  setClickRedModel()
  setClickNormalModel()  
}


/*******************************************************************/


let currentSceneName = null

/*******************************************************************/

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


/*******************************************************************/

const getSceneKey = v => {
  let s = null
  for ( let key in MODELS ) {
    if ( MODELS[ key ].name == v ) s = MODELS[ key ]
  }
  return s
} 



