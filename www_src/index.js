import  { initUi } from "./ui"
import { sc } from "./scene" 

window.onload = () => {
  initUi()
  sc.createScene()
  //sc.loadFirstModel()
  sc.loadScene( MODELS['model1'] )
  changeModel( 1 )
}  

const changeModel = n => {
  if ( n > 5 ) return 
  console.log( n ) 
  
  setTimeout( () => { 
      sc.loadScene( MODELS['model' + n ])
      n ++
      changeModel( n )
    }, 
    5000 
  )
} 
