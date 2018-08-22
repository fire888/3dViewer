
import { ui } from "./ui"
import { sc } from "./scene" 


/*******************************************************************/

window.onload = () => {
  ui.init()
  sc.createScene()
  sc.loadScene( MODELS['model1'] )
  //changeModel( 1 )
  ui.setClickGetNameScene( ( name ) => {
    sc.loadScene( MODELS[ name ] )
  } )   
}  

const changeModel = n => {
  if ( n > 5 ) n = 1

  setTimeout( () => { 
      sc.loadScene( MODELS['model' + n ])
      n ++
      changeModel( n )
    }, 
    5000 
  )
} 

