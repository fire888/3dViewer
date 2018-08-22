import React from 'react'
import ReactDOM from 'react-dom'
 
import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import { Provider } from 'react-redux'

export { ui }


/*******************************************************************/


let clickSceneFunction

/*******************************************************************/

const ui = {
  init: () => initUi(),
  setClickGetNameScene: ( f ) => {
    clickSceneFunction = f
  } 
}


const clickScene = v => {
   clickSceneFunction( v )
}  


/*******************************************************************/

class App extends React.Component {
  render() {
    const str = '3D Viewer'        
    return ( <div>
        <Logo />
        <Tree />
      </div> )
  }
}


class Logo extends React.Component {
  render() {
    return (
      <div className = 'logo'> 3D Viewer </div>
    )
  }
}


class Tree extends React.Component {
  constructor() {
    super()
  }
  render() {
    this.arrProj = getProj()    
    const projects = this.arrProj.map( ( item, index ) => {
      return <Project
        key = { index }
        name = { item }
      />
    } )
    return (
      <div className = 'tree'> 
        { projects }
      </div>
    )
  } 
}


class Project extends React.Component {  
  constructor() {
    super()
  }
  render() {
    this.arrScenes = getScenes( this.props.name )
    const scenes = this.arrScenes.map( ( item, index ) => {
      return <Scene
        key = { index }
        name = { item }
      />
    } ) 
    return (
      <div className = 'project'>
        { this.props.name }
        { scenes }
        <hr/>
      </div>
    )
  }    
}


class Scene extends React.Component {
  constructor() {
    super()
  }

  clickFunction() { //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    clickScene( this.props.name )
    //alert( this.props.name )
  }

  render() {
    const imgPath = 'assets/' + getImgPathPreviewScene( this.props.name ) 
    const arrModels = getModels( this.props.name )
    const models = arrModels.map( ( item, index ) => {
      return <Model
       key = { index }
       name = { item } 
      />
    } ) 
    return (
      <div className = 'scene'>
        <img className = 'previewScene' src = { imgPath } onClick = { this.clickFunction.bind(this) } />   
        <p onClick = { this.clickFunction.bind(this) }> { this.props.name } </p>
        { models }
      </div>
    )
  }    
}


class Model extends React.Component {
  constructor() {
    super()
  }  
  render() {
    return (
      <div className = 'model'>
        { this.props.name }        
      </div>
    )
  }   
}


/*******************************************************************/

const initUi = () => {
  ReactDOM.render(
    <App />,
    document.getElementById( 'ui' )
  )
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
  console.log( v )
  for ( let key in MODELS ) { 
    if ( MODELS[ key ].name == v ) {
      for ( let l in MODELS[ key ].layers ) {
        layers.push( l ) 
      }
    }
  } 
  return layers
}


