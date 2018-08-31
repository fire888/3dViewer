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
  setClickGetIdScene: ( f ) => { returnIdScene = f },
  setClickGetIdHideModel: ( f ) => { clickHideModel = f },
  setClickGetIdShowModel: ( f ) => { clickShowModel = f },
  setClickGetIdTranspModel: ( f ) => { clickTranspModel = f },
  setClickGetIdRedModel: ( f ) => { clickRedModel = f }
}

let store,
returnIdScene, clickHideModel, clickShowModel, clickTranspModel, clickRedModel

const setClickOnScene = idScene => returnIdScene( idScene )

const setClickHideModel = idModel => clickHideModel( idModel )

const setClickShowModel = idModel => clickShowModel( idModel )

const setClickTranspModel = idModel => clickTranspModel( idModel ) 

const setClickRedModel = idModel => clickRedModel( idModel )

const setClickNormalModel = idModel => { /*** */ }



/*******************************************************************/

const initUi = ( uiTreeDATA ) => {
  addUiPropsInTree( uiTreeDATA )
  let reducers = createReducers()
  store = Redux.createStore( reducers, uiTreeDATA  )  
  store.subscribe( renderUiTreeReact )
  renderUiTreeReact()
}


const addUiPropsInTree = ( uiTreeDATA ) => {
  uiTreeDATA.forEach( ( project, idProj ) => {
    project.isOpen = false
    project.isCurrent = false
    project.uiIndexProject = idProj
    project.scenes.forEach( ( scene, idSc )  => {
      scene.isOpen = false
      scene.isCurrent = false
      scene.uiIndexScene = idSc
      scene.models.forEach( ( model, idModel ) => {
        model.isCurrent = false
        model.view = 'normal' // || 'hidden' || 'transp' || 'red'
      } )
    } )  
  } )
}


const createReducers = () => {
  let r = function(state, action) {
    switch ( action.type ) { 
      case 'CLOSE_PROJECT':
        state.forEach( ( item, index ) => {
          if ( item.uiIndexProject == action.uiIndexProject ) item.isOpen = false 
        } )
        return state
      case 'OPEN_PROJECT':
        state.forEach( ( item, index ) => {
          if ( item.uiIndexProject == action.uiIndexProject ) item.isOpen = true
        } )
        return state        
      case 'OPEN_SCENE_CLOSE_ANOTHER':
        state.forEach( ( pr, index ) => {
          if ( pr.uiIndexProject == action.uiIndexProject ) {
            pr.scenes.forEach( ( scene, index ) => {
              scene.uiIndexScene != action.uiIndexScene ? scene.isOpen = false : scene.isOpen = true 
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


const openProjectAction = uiIndexProject => {
  return {
    type: 'OPEN_PROJECT',
    uiIndexProject
  }
}

const closeProjectAction = uiIndexProject => {
  return {
    type: 'CLOSE_PROJECT',
    uiIndexProject
  }
}

const openSceneAndCloseAnoterAction = ( uiIndexScene, uiIndexProject ) => {
  return {
    type: 'OPEN_SCENE_CLOSE_ANOTHER',
    uiIndexScene,
    uiIndexProject
  }
}


const renderUiTreeReact = () => {
  ReactDOM.render( 
    <App store = { store }/>, 
    document.getElementById( 'ui' ) 
  )
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
        uiIndexProject = { item.uiIndexProject }
        isOpen = { item.isOpen }
        isCurrent = { item.isCurrent }
      />
    } )     
    return ( 
      <div>
        <Logo />
        <div className = 'uiTree'>
          { projects }
        </div>
        <hr/>
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
    if ( store.getState()[ this.props.uiIndexProject ].isOpen == true ) {   
      store.dispatch( closeProjectAction( this.props.uiIndexProject ) )
    } else {
      store.dispatch( openProjectAction( this.props.uiIndexProject ) )
    }
  } 
  render() {
    var scenes, anim
    if ( store.getState()[ this.props.uiIndexProject ].isOpen == true ) {
      anim = 'animOpen'
    } else {
      anim = 'animClose' 
    } 
    scenes = store.getState()[ this.props.uiIndexProject ].scenes.map( ( item, index ) => {
      return <Scene 
        key = { index }
        name = { item.name }
        uiIndexProject = { this.props.uiIndexProject }
        uiIndexScene = { item.uiIndexScene }
        isOpen = { item.isOpen }
        isCurrent = { item.isCurrent }
        path = { item.path }
        idScene = { item.idScene }
      />
    } )     
    return (
      <div className = 'project'>
        <hr/>      
        <div className = 'projName' onClick = { this.clickClose.bind( this ) }>{ this.props.name }</div>
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
    store.dispatch( openSceneAndCloseAnoterAction( this.props.uiIndexScene, this.props.uiIndexProject ) )  
    setClickOnScene( this.props.idScene )
  }
  render() {
    const imgSrc =  'assets/' + this.props.path + '/preview.png'
    const img = <img src = { imgSrc } className = 'previewScene'/>
    const models = store.getState()[ this.props.uiIndexProject ].scenes[ this.props.uiIndexScene ].models.map( ( item, index ) => { 
      return <Model 
        name = { item.name }
        idModel = { item.idModel }
        idScene = { this.props.idScene }
      />
    } )
    let anim, current 
    if ( this.props.isOpen ) { 
      anim = 'animOpen'
      current = 'currentSceneName' 
    } else { 
      anim = 'animClose'
      current = 'sceneName'
    }      
     
    return (
      <div className = 'scene' onClick = { this.clickFunction.bind( this ) }>
        <div className = 'sceneHeader'>
          { img } 
          <div className = { current } >{ this.props.name }</div>
        </div>  
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
        <div className = 'modelName'>{ this.props.name } </div>
        <div className = 'modelButtons'>
          <HideModelBtn idModel = { this.props.idModel } />
          <TranspModelBtn idModel = { this.props.idModel } /> 
          <RedModelBtn idModel = { this.props.idModel } /> 
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
      btnOn: false
    }
  }
  clickFunction () {
    console.log( 'props.idModel: ', this.props.idModel )
    if ( this.state.btnOn ) {
      this.setState( { btnOn: false } )
      setClickShowModel( this.props.idModel )
    } else {
      this.setState( { btnOn: true } )
      setClickHideModel( this.props.idModel )
    } 
  }
  render() {
    var txt, cl
    if ( this.state.btnOn ) {
      cl = 'showModelButton' 
    } else {
      cl = 'hideModelButton'
    }  
    return(
      <div className = { cl } onClick = { this.clickFunction.bind( this ) }>скрыть</div> 
    )
  } 
} 


class TranspModelBtn extends React.Component {
  constructor() {
    super()
    this.state = {
      btnOn: false
    }
  }
  clickFunction () {
    if ( this.state.btnOn ) {
      this.setState( { btnOn: false } )
      setClickNormalModel( this.props.idModel )
    } else {
      this.setState( { btnOn: true } )
      setClickTranspModel( this.props.idModel )
    } 
  }
  render() {
    var txt, cl
    if ( this.state.btnOn ) {
      cl = 'showModelButton' 
    } else { 
      cl = 'hideModelButton'
    }  
    return(
      <div className = { cl } onClick = { this.clickFunction.bind( this ) }>прозр</div> 
    )
  } 
} 


class RedModelBtn extends React.Component {
  constructor() {
    super()
    this.state = {
      btnOn: false
    }
  }
  clickFunction () {
    if ( this.state.btnOn ) {
      this.setState( { btnOn: false } )
      setClickNormalModel( this.props.idModel )
    } else {
      this.setState( { btnOn: true } )
      setClickRedModel( this.props.idModel )
    } 
  }
  render() {
    var txt, cl
    if ( this.state.btnOn ) {
      cl = 'showModelButton' 
    } else {
      cl = 'hideModelButton'
    }  
    return(
      <div className = { cl } onClick = { this.clickFunction.bind( this ) }>красный</div> 
    )
  } 
} 


