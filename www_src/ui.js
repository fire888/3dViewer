import React from 'react'
import ReactDOM from 'react-dom'
import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

export { ui }


/*******************************************************************/

const ui = {
  init: ( uiTreeDATA ) => initUi( uiTreeDATA ),
  setClickGetIdScene: ( getIdScene ) => { returnIdScene = getIdScene },
  setClickGetIdHideModel: ( getIdModel ) => { clickHideModel = getIdModel },
  setClickGetIdShowModel: ( getIdModel ) => { clickShowModel = getIdModel },

}

let store,
returnIdScene, clickHideModel, clickShowModel

const setClickOnScene = idScene => {
  returnIdScene( idScene )
} 

const setClickHideModel = idModel => {
  clickHideModel( idModel )
} 

const setClickShowModel = idModel => {
  clickShowModel( idModel )
} 

/*******************************************************************/


const initUi = ( uiTreeDATA ) => {

  addUiPropsInTree( uiTreeDATA )

  let reducers = createReducers()
  store = Redux.createStore( reducers, uiTreeDATA  )  
  store.subscribe( renderUiTreeReact )
  renderUiTreeReact()
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
    var scenes, anim
    if ( store.getState()[ this.props.id ].isOpen == true ) {
      anim = 'animOpen'
    } else {
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
        idScene = { item.idScene }
      />
    } )     
    return (
      <div className = 'project'>
        <hr/>      
        <span className = 'projName' onClick = { this.clickClose.bind( this ) }>{ this.props.name }</span>
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
    setClickOnScene( this.props.idScene )
  }
  render() {
    const imgSrc =  'assets/' + this.props.path + '/preview.png'
    const img = <img src = { imgSrc } className = 'previewScene'/>
    const models = store.getState()[ this.props.projectIndex].scenes[ this.props.id ].models.map( ( item, index ) => {
      return <Model 
        name = { item.name }
        idModel = { item.idModel }
        idScene = { this.props.idScene }
      />
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


class Model extends React.Component {
  render() {
    return ( 
      <div className = 'model'>
        <div className = 'modelName'>{ this.props.name } / { this.props.idModel } </div>
        <div className = 'modelButtons'>
          < HideModelBtn idModel = { this.props.idModel } />
          <span className = 'hideModelButton'>transp</span> 
          <span className = 'hideModelButton'>red</span>
        </div>           
      </div>    
    )
  }
}

Model.contextTypes = {
  store: PropTypes.object
}


class HideModelBtn extends React.Component {
  constructor() {
    super()
    this.state = {
      isHide: false
    }
  }
  clickFunction () {
    if ( this.state.isHide ) {
      this.setState( { isHide: false } )
      setClickShowModel( this.props.idModel )
    } else {
      this.setState( { isHide: true } )
      setClickHideModel( this.props.idModel )
    } 
  }
  render() {
    var txt, cl
    if ( this.state.isHide ) {
      txt = 'show'
      cl = 'showModelButton' 
    } else {
      txt = 'hide' 
      cl = 'hideModelButton'
    }  
    return(
      <div className = { cl } onClick = { this.clickFunction.bind( this ) }>{ txt }</div> 
    )
  } 
} 


