

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

 
let store,
returnIdScene, clickHideModel, clickShowModel, clickTranspModel, clickRedModel, clickMtlMaterial

var scrollPixels = 0, isBlockClallbackScroll = false


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
  setCustomScrollBar()
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

const setCustomScrollBar = () => {
  $( '.content' ).mCustomScrollbar( {
    theme: 'inset-2-dark',
    callbacks: {
      onScroll: () => { 
        if ( isBlockClallbackScroll ) return
        scrollPixels = this.mcs.draggerTop 
      }
  }    
  })
}

const hideScrollBar = () => {
  isBlockClallbackScroll = false
  $('.content').css( { overflow: 'hidden'} )
}

const startAnimateLogo = () => {}

const stopAnimateLogo = () => {}


/*******************************************************************/

class App extends React.Component {
  
  constructor( props ) {
    super( props )
    this.state = {
      isOpen: true,
      isOpenNav: false
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
    if ( this.state.isOpen ) { 
      isBlockClallbackScroll = true
       this.setState( { isOpen: false } )
    } else {
      setTimeout( ()=> { 
        $('.content').mCustomScrollbar('scrollTo', scrollPixels + '' ) 
      }, 800 )  
      this.setState( { isOpen: true } )
    }
  }
  burgerClick() {
    if ( this.state.isOpenNav ) {
      this.setState( { isOpenNav: false } )
    } else {
      this.setState( { isOpenNav: true } )      
    }
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
    let h = window.innerHeight - 80 + 'px'
    var styleTree
    var isOpen, rollText
    if ( this.state.isOpen ) { 
      isOpen = 'treeOpen content mCustomScrollbar'
      rollText = <span>&#9650;</span>
      styleTree = {
        maxHeight: h,
        overflow: 'hidden'
      }
      $('#mCSB_1').css( { maxHeight: h, display: 'block' } ) 
    } else {
      $('#mCSB_1').css( { display: 'block' } )  
      isOpen = 'treeClose content mCustomScrollbar'
      rollText = <span>&#9660;</span>
      styleTree = {
        maxHeight: '0px',
        overflow: 'hidden'
      }
      setTimeout( () => { hideScrollBar() }, 800 )
    }
    var nav = null, burgerTxt = <span>&#8801;</span>
    if ( this.state.isOpenNav ) {
      nav = 
      burgerTxt = <span>&times;</span>
    }
    return ( 
      <div>
        <MainNavigation isOpen = { this.state.isOpenNav }/>
        <div className = 'header'>
          <div className = 'burger' onClick = { this.burgerClick.bind( this ) }>{ burgerTxt }</div>
          <div className = 'logo'>{ PAGE.title }</div>
          <div className = 'rollHeader' onClick = { this.onClickRoll.bind( this ) }>{ rollText }</div>
        </div>
        <hr className = 'hrTree'/>
        <div className = { isOpen } style = { styleTree }>
          { projects }
        </div>
        <hr className = 'hrTree'/>
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


class MainNavigation extends React.Component {  
  render() {
    var cl = 'mainNavigation animOpen'
    if ( ! this.props.isOpen ) cl = 'mainNavigation animClose'
    const nav = PAGE.links.map( ( item, index ) => { 
      if ( item.title == PAGE.title) { 
        return null
      } else {
        return (
          <div className = 'navigationItem' key = { index } >
            <a key = { index } href = {item.reference }> { item.title } </a>
            <hr className='hrTree'/>
          </div>
        )
      }  
    } ) 
    return <div className = { cl }>{ nav }</div>
  }    
}

MainNavigation.contextTypes = {
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
        <div className = 'projName' onClick = { this.clickClose.bind( this ) }>{ this.props.name }</div>
        <hr className = 'hrProj'/>
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
    const models = store.getState()[ this.props.uiIndexProject ].scenes[ this.props.uiIndexScene ].models.map( ( item, index ) => { 
      return <Model 
        key = { index }
        name = { item.name }
        idModel = { item.idModel }
        idScene = { this.props.idScene }
      />
    } )
    let anim, current, img
    const imgSrc =  'assets/' + this.props.path + '/preview.png' 
    if ( this.props.isOpen ) { 
      anim = 'animOpen'
      current = 'currentSceneName'
      img = <img src = { imgSrc } className = 'previewSceneCurrent'/>
    } else { 
      anim = 'animClose'
      current = 'sceneName'
      img = <img src = { imgSrc } className = 'previewScene'/> 
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
      clHide = 'btnOn btnHide' 
    } else {
      clHide = 'btnOff btnHide'
    }
    if ( this.state.btnMatOn == 'none' ) {
      clTransp = 'btnOff btnTransp'
      clRed = 'btnOff btnRed'  
    } 
    if (  this.state.btnMatOn == 'transp' ) { 
      clTransp = 'btnOn btnTransp'
      clRed = 'btnOff btnRed' 
    }  
    if (  this.state.btnMatOn == 'red' ) { 
      clTransp = 'btnOff btnTransp'
      clRed = 'btnOn btnRed' 
    }         
    return(
      <div className = 'modelButtons'>
        <img src = 'styles/but.png' className = { clHide } onClick = { this.clickHideFunction.bind( this ) }/>
        <img src = 'styles/but.png' className = { clTransp } onClick = { this.clickTranspFunction.bind( this ) }/>
        <img src = 'styles/but.png' className = { clRed } onClick = { this.clickRedFunction.bind( this ) }/>
      </div>
    )
  } 
} 


