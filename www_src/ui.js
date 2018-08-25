import React from 'react'
import ReactDOM from 'react-dom'
 
import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

import { createStore, combineReducers } from 'redux'

export { ui }

console.log( PropTypes )

/*******************************************************************/

const ui = {
  init: ( uiTreeDATA ) => initUi( uiTreeDATA )
}

let store

/*******************************************************************/


const initUi = ( uiTreeDATA ) => {

  addUiPropsInTree( uiTreeDATA )

  let reducers = createReducers()
  store = Redux.createStore( reducers, uiTreeDATA  )  
  store.subscribe( renderUiTreeReact )

  renderUiTreeReact()

  //store.dispatch( openProjectAction( 0 ) )
  //console.log( store.getState() )  
}

/*******************************************************************/

const addUiPropsInTree = ( uiTreeDATA ) => {
  uiTreeDATA.forEach( ( project, idProj ) => {
    project.isOpen = false
    project.isCurrent = false
    project.id = idProj
    project.scenes.forEach( ( scene, idSc )  => {
      scene.isOpen = false
      scene.isCurrent = false
      scene.id = idSc
      scene.models.forEach( ( model, idModel ) => {
        model.isCurrent = false
        model.view = 'normal' // || 'hidden' || 'transp' || 'red'
        model.id = idModel 
      } )
    } )  
  } )
}


const createReducers = () => {
  let r = function(state, action) {
    switch ( action.type ) { 
      case 'CLOSE_PROJECT':
        state.forEach( ( item, index ) => {
          if ( item.id == action.id ) item.isOpen = false 
        } )
        return state
      case 'OPEN_PROJECT':
        state.forEach( ( item, index ) => {
          if ( item.id == action.id ) item.isOpen = true
        } )
        return state        
      case 'OPEN_SCENE_CLOSE_ANOTHER':
        state.forEach( ( pr, index ) => {
          if ( pr.id == action.projId ) {
            pr.scenes.forEach( ( scene, index ) => {
              scene.id != action.id ? scene.isOpen = false : scene.isOpen = true 
            } ) 
          } else {
            pr.scenes.forEach( ( scene, index ) => {
              scene.isOpen = false
            } ) 
          }
        } )
        return state        
      default: 
        return state     
    }  
  }
  return r  
} 


const renderUiTreeReact = () => {
  ReactDOM.render( 
    <App store = { store }/>, 
    document.getElementById( 'ui' ) 
  )
}


/*******************************************************************/

const openProjectAction = id => {
  return {
    type: 'OPEN_PROJECT',
    id
  }
}

const closeProjectAction = id => {
  return {
    type: 'CLOSE_PROJECT',
    id
  }
}

const openSceneAndCloseAnoterAction = ( id, projId ) => {
  return {
    type: 'OPEN_SCENE_CLOSE_ANOTHER',
    id,
    projId
  }
}


/*******************************************************************/

class App extends React.Component {
  constructor( props ) {
    super( props ) 
  }
  getContextChild() {
    return {
      store: this.props.store
    }
  }
  componentWillMount() {
    this.unsubscribe = store.subscribe(
      () => this.forceUpdate()
    )
  }
  componentWillUnmount() {
    this.unsubscribe()
  }  
  render() {   
    const projects = store.getState().map( ( item, index ) => {
      return <Project
        key = { index }
        name = { item.name }
        id = { item.id }
        isOpen = { item.isOpen }
        isCurrent = { item.isCurrent }
      />
    } )     
    return ( 
      <div>
        <Logo />
        { projects }
      </div> 
    )
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
}

App.childContextTypes = {
  store: PropTypes.object.isRequired
}



class Logo extends React.Component {
  render() {
    return (
      <div className = 'logo'> 3D Viewer </div>
    )
  }
}

Logo.contextTypes = {
  store: PropTypes.object
}



class Project extends React.Component {  
  clickClose() {
    if ( store.getState()[ this.props.id ].isOpen == true ) {   
      store.dispatch( closeProjectAction( this.props.id ) )
    } else {
      store.dispatch( openProjectAction( this.props.id ) )
    }
  } 
  render() {
    var rollText, scenes, anim
    if ( store.getState()[ this.props.id ].isOpen == true ) {
      rollText = 'свернуть'
      anim = 'animOpen'
    } else {
      rollText = 'развернуть'      
      anim = 'animClose' 
    } 
    scenes = store.getState()[ this.props.id ].scenes.map( ( item, index ) => {
      return <Scene 
        key = { index }
        name = { item.name }
        projectIndex = { this.props.id }
        id = { item.id }
        isOpen = { item.isOpen }
        isCurrent = { item.isCurrent }
        path = { item.path }
      />
    } )     
    return (
      <div className = 'project'>
        { this.props.name }
        <span className = 'cornerIcon' onClick = { this.clickClose.bind( this ) }>{ rollText }</span>
        <div className = { anim }>
        { scenes }
        </div>
      </div>
    )
  }    
}

Project.contextTypes = {
  store: PropTypes.object
}



class Scene extends React.Component {
  clickFunction() {
    if ( this.props.isOpen == true ) return
    store.dispatch( openSceneAndCloseAnoterAction( this.props.id, this.props.projectIndex ) )
    console.log( 'not current' )
  }
  render() {
    const imgSrc =  'assets/' + this.props.path + '/preview.png'
    const img = <img src = { imgSrc } className = 'previewScene'/>
    const models = store.getState()[ this.props.projectIndex].scenes[ this.props.id ].models.map( ( item, index ) => {
      return <p  className = 'model'>{ item.name }</p>
    } )
    let anim 
    this.props.isOpen ? anim = 'animOpen' : anim = 'animClose'     
     
    return (
      <div className = 'scene' onClick = { this.clickFunction.bind( this ) }>
        { img } 
        <p>{ this.props.name }</p>
        <div className = { anim } >
          { models }
        </div>
      </div>
    )
  }    
}

Scene.contextTypes = {
  store: PropTypes.object
}











/**************************************************************************/
/**************************************************************************/
/**************************************************************************/
/**************************************************************************/
/**************************************************************************/


/*
class Project extends React.Component {  
  constructor() {
    super()
  }

  rollFunc() {
    if ( store.getState()[ this.props.id ].isOpen == true ) {
      store.dispatch( {
        type: 'CLOSE_PROJECT',
        id: this.props.id
      } )      
    } else {
      store.dispatch( {
        type: 'OPEN_PROJECT',
        id: this.props.id
      } )       
    }
    console.log( store.getState() ) 
  } 

  render() {
     var rollText, scene
     if ( store.getState()[ this.props.id ].isOpen == true ) {
       rollText = 'свернуть' 
       scene = <Scene />
     } else {
      rollText = 'развернуть' 
      scene = null      
     } 
    return (
      <div className = 'project'>
        Project Name
        <span className = 'cornerIcon' onClick = { this.rollFunc.bind( this ) }>{ rollText }</span>
       { scene }
      </div>
    )
  }    
}
*/

/*
class Scene extends React.Component {
  constructor() {
    super()
  }

  clickFunction() { 
  }

  render() {
    return (
      <div className = 'scene'>
        scene Name
        <Model />
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
          NameModel
          <ShowHideBtn />     
        </div> 
    )
  }   
}
*/

class ShowHideBtn extends React.Component {
  constructor() {
    super()
  }
  
  clickFunction() {}
  
  render() {
    return (
      <div className = 'hideModelButton' onClick = { this.clickFunction.bind(this) }>
        hide btn
      </div>
    )
  }   
}


