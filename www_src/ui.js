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
  sceneLoadedOn: () => { stopAnimateLogo() },
  sceneStartLoad: () => { startAnimateLogo() },
  setClickGetIdHideModel: ( f ) => { clickHideModel = f },
  setClickGetIdShowModel: ( f ) => { clickShowModel = f },
  setClickGetIdTranspModel: ( f ) => { clickTranspModel = f },
  setClickGetIdRedModel: ( f ) => { clickRedModel = f },
  setClickGetNameMtlModel: ( f ) => { clickMtlMaterial = f }
}


let logo 
let store,
returnIdScene, clickHideModel, clickShowModel, clickTranspModel, clickRedModel, clickMtlMaterial


const setClickOnScene = idScene => returnIdScene( idScene )

const setClickHideModel = idModel => clickHideModel( idModel )

const setClickShowModel = idModel => clickShowModel( idModel )

const setClickTranspModel = idModel => clickTranspModel( idModel ) 

const setClickRedModel = idModel => clickRedModel( idModel )

const setClickGetNameMtlModel = idModel => clickMtlMaterial( idModel ) 




/*******************************************************************/

const initUi = ( uiTreeDATA ) => {
  addUiPropsInTree( uiTreeDATA )
  let reducers = createReducers()
  store = Redux.createStore( reducers, uiTreeDATA  )  
  store.subscribe( renderUiTreeReact )
  renderUiTreeReact()
 
  logo = getLogo()
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


/********************************************************************/

const getLogo = () => {
  let l = document.getElementsByClassName( 'logo' )
  return l[0]
} 

const startAnimateLogo = () => logo.className += ' animateLogo'  

const stopAnimateLogo = () => logo.className = 'logo'



/*******************************************************************/

class App extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      isOpen: false
    } 
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
  onClickRoll() {
    this.state.isOpen ? this.setState( { isOpen: false } ) : this.setState( { isOpen: true } )
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
    var isOpen, rollText
    if ( this.state.isOpen ) { 
      isOpen = 'animOpen'
      rollText = <span>&#9650;</span> 
    } else {
      isOpen = 'animClose'
      rollText = <span>&#9660;</span>
    }
    return ( 
      <div>
        <div className='header'>
          <div className = 'logo'>Viewer</div>
          <div className = 'rollHeader' onClick = { this.onClickRoll.bind( this ) }>{ rollText }</div>
        </div>
        <hr/>
        <div className = { isOpen }>
            { projects }
        </div>
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
        <div className = 'projName' onClick = { this.clickClose.bind( this ) }>{ this.props.name }</div>
        <div className = { anim }>
        { scenes }
        </div>
        <hr/> 
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
    var img 
    if ( this.props.isOpen ) {
      img = <img src = { imgSrc } className = 'previewSceneCurrent'/>
    } else {
      img = <img src = { imgSrc } className = 'previewScene'/>      
    }  
    const models = store.getState()[ this.props.uiIndexProject ].scenes[ this.props.uiIndexScene ].models.map( ( item, index ) => { 
      return <Model 
        key = { index }
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
        <BtnsModel idModel = { this.props.idModel } />
      </div>    
    )
  }
}

Model.contextTypes = {
  store: PropTypes.object
}


class BtnsModel extends React.Component {
  constructor() {
    super()
    this.state = {
      btnHideOn: false,
      btnMatOn: 'none' // | 'transp' | 'red'
    }
  }
  clickHideFunction () {
    if ( this.state.btnHideOn ) {
      this.setState( { btnHideOn: false } )
      setClickShowModel( this.props.idModel )
    } else {
      this.setState( { btnHideOn: true } )
      setClickHideModel( this.props.idModel )
    } 
  }
  clickTranspFunction () {
    if ( this.state.btnMatOn != 'transp' ) {
      this.setState( { btnMatOn: 'transp' } )
      setClickTranspModel( this.props.idModel )
    } else {
      this.setState( { btnMatOn: 'none' } )
      setClickGetNameMtlModel( this.props.idModel )
    } 
  }
  clickRedFunction () {
    if ( this.state.btnMatOn !='red' ) {
      this.setState( { btnMatOn: 'red' } )
      setClickRedModel( this.props.idModel )
    } else {
      this.setState( { btnMatOn: 'none' } )
      setClickGetNameMtlModel( this.props.idModel )
    } 
  }    
  render() {
    var txt, clHide, clTransp, clRed
    if ( this.state.btnHideOn ) {
      clHide = 'btnOn' 
    } else {
      clHide = 'btnOff'
    }
    if ( this.state.btnMatOn == 'none' ) {
      clTransp = 'btnOff'
      clRed = 'btnOff'  
    } 
    if (  this.state.btnMatOn == 'transp' ) { 
      clTransp = 'btnOn'
      clRed = 'btnOff' 
    }  
    if (  this.state.btnMatOn == 'red' ) { 
      clTransp = 'btnOff'
      clRed = 'btnOn' 
    }         
    return(
      <div className = 'modelButtons'>
        <div className = { clHide } onClick = { this.clickHideFunction.bind( this ) }>СК</div>
        <div className = { clTransp } onClick = { this.clickTranspFunction.bind( this ) }>ПР</div> 
        <div className = { clRed } onClick = { this.clickRedFunction.bind( this ) }>КР</div> 
      </div>
    )
  } 
} 


