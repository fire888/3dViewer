import React from 'react'
import ReactDOM from 'react-dom'
 
import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import { Provider } from 'react-redux'

export { ui }


/*******************************************************************/

let clickSceneAction, 
    clickHideModelAction, 
    clickShowModelAction, 
    clickTranspModelAction,
    clickRedModelAction,
    clickNormalModelAction

/*******************************************************************/

const ui = {
  init: () => initUi(),
  setClickGetNameScene: ( f ) => clickSceneAction = f,
  setClickGetNameHideModel: ( f ) => clickHideModelAction = f,
  setClickGetNameShowModel: ( f ) => clickShowModelAction = f,
  setClickGetNameTranspModel: ( f ) => clickTranspModelAction = f,
  setClickGetNameRedModel: ( f ) => clickRedModelAction = f,
  setClickGetNameNormalModel: ( f ) => clickNormalModelAction = f   
}


const clickScene = v => clickSceneAction( v )

const clickHideModel = ( layer, scene ) => clickHideModelAction( layer, scene )

const clickShowModel = ( layer, scene ) => { clickShowModelAction( layer, scene ) }

const clickTranspModel = ( layer, scene ) => { clickTranspModelAction( layer, scene ) }

const clickRedModel = ( layer, scene ) => clickRedModelAction( layer, scene )

const clickNormalModel = ( layer, scene ) => clickNormalModelAction( layer, scene )


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
    this.state = {
      isAllLayersShow: false 
    }
  }

  clickFunction() {
    this.setState( { isAllLayersShow: false } )
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
      <div className = 'tree' onClick = { this.clickFunction.bind(this) }> 
        { projects }
      </div>
    )
  } 
}


class Project extends React.Component {  
  constructor() {
    super()
    this.state = { 
      isShowScenes: false 
    }
  }

  roll() {
    let isShow 
    this.state.isShowScenes ?  isShow = false : isShow = true  
    this.setState( { isShowScenes: isShow } )
  }

  render() {

    var rolltext = <span>развернуть</span>
    if ( this.state.isShowScenes ) {
      rolltext = <span>свернуть</span> 
    }

    this.arrScenes = getScenes( this.props.name )
    const scenes = this.arrScenes.map( ( item, index ) => {
      return <Scene
        key = { index }
        name = { item }
        isShow = { this.state.isShowScenes } 
      />
    } ) 
    return (
      <div className = 'project'>
        { this.props.name } 
        <div className = 'cornerIcon' onClick = { this.roll.bind(this) } > { rolltext } </div>        
        { scenes }
        <hr/>
      </div>
    )
  }    
}


class Scene extends React.Component {
  constructor() {
    super()
    this.state = { 
      isShowLayers: false
    }
  }

  clickFunction() { 
    clickScene( this.props.name )
    this.setState( { isShowLayers: true } )
  }

  render() {
  
    if ( this.props.isShow ) {     
      const imgPath = 'assets/' + getImgPathPreviewScene( this.props.name ) 
      var img = <img className = 'previewScene' src = { imgPath } onClick = { this.clickFunction.bind(this) } />   
      var nameP = <p onClick = { this.clickFunction.bind(this) }> { this.props.name } </p> 

      const arrModels = getModels( this.props.name )
      var models = arrModels.map( ( item, index ) => {
        return <Model
          key = { index }
          name = { item } 
          scene = { this.props.name }
          isShow = { this.state.isShowLayers }
        />
      } ) 
    } 
    return (
      <div className = 'scene'>
          { img }  
          { nameP }
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
      if ( this.props.isShow ) {
         var nameModel = this.props.name
         var hideBtn =  <HideModel name = { this.props.name } scene = { this.props.scene } />
         var showBtn =  <ShowModel name = { this.props.name } scene = { this.props.scene } />
         var trBtn = <TranspModel name = { this.props.name } scene = { this.props.scene } />
         var rBtn = <RedModel name = { this.props.name } scene = { this.props.scene } />   
      }    
    return (
        <div className = 'model'>
          { nameModel }
          { hideBtn }
          { showBtn }
          { trBtn}
          { rBtn }        
        </div> 
    )
  }   
}


class HideModel extends React.Component {
  constructor() {
    super()
  }
  
  clickFunction() {
    clickHideModel( this.props.name, this.props.scene )   
  }
  
  render() {
    return (
      <div className = 'hideModelButton' onClick = { this.clickFunction.bind(this) }>
        hide
      </div>
    )
  }   
}


class ShowModel extends React.Component {
  constructor() {
    super()
  } 

  clickFunction() {
    clickShowModel( this.props.name, this.props.scene )   
  }

  render() {
    return (
      <div className = 'showModelButton' onClick = { this.clickFunction.bind( this ) }>
        show
      </div>
    )
  }   
}


class TranspModel extends React.Component {
  constructor() {
    super()
  }

  clickFunction() {
    clickTranspModel( this.props.name, this.props.scene )   
  }

  render() {
    return (
      <div className = 'transpModelButton' onClick = { this.clickFunction.bind( this ) }>
        transp
      </div>
    )
  }   
}


class RedModel extends React.Component {
  constructor() {
    super()
  } 

  clickFunction() {
    clickRedModel( this.props.name, this.props.scene )   
  }

  render() {
    return (
      <div className = 'redModelButton' onClick = { this.clickFunction.bind( this ) }>
        red
      </div>
    )
  }   
}


class NormalModel extends React.Component {
  constructor() {
    super()
  } 

  clickFunction() {
    clickNormalModel( this.props.name, this.props.scene )   
  }

  render() {
    return (
      <div className = 'normalModelButton' onClick = { this.clickFunction.bind( this ) }>
        normal
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
  for ( let key in MODELS ) { 
    if ( MODELS[ key ].name == v ) {
      for ( let l in MODELS[ key ].layers ) {
        layers.push( l ) 
      }
    }
  } 
  return layers
}


