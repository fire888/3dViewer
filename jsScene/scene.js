

"use strict";

const model = {}
let canvas, renderer, scene, camera,
loader = new THREE.OBJLoader(),
uiWrapper = document.getElementById( 'ui' )

 	
/**************************************************;
 * SCENE
 **************************************************/

 
const initScene = () => { 
	
	canvas = document.getElementById('canvas-webgl');
	renderer = new THREE.WebGLRenderer({ canvas: canvas} );
	renderer.setClearColor(0xffffffff);	
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.gammaInput = true;
	renderer.gammaOutput = true;

    scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera( 10,
			window.innerWidth/window.innerHeight, 
            3.5, 
            15000
        );

	camera.position.set( 0, -10, 5000 );
	camera.lookAt( scene.position )
	
	let controls = new THREE.OrbitControls( camera, renderer.domElement )
	controls.minDistance = 10
	controls.maxDistance = 10000	
	
	let light = new THREE.AmbientLight( 0x8f98e6, 0.5 );
	scene.add(light);	
	
	let pointLight = new THREE.PointLight( 0x00ccff, 0.8 );
	pointLight.position.set(0, 3000, 8000);	
	scene.add( pointLight );

    let box = new THREE.Mesh(
	    new THREE.BoxGeometry( 200, 200, 200 )
	  ,	new THREE.MeshBasicMaterial( { color: 0xff0000 } ) 
    )
	//scene.add( box )
}


/**************************************************;
 * ANIMATION SCENE
 **************************************************/
  
const animate = () => {
	renderer.render( scene, camera )	
	requestAnimationFrame( animate );	
}

/**************************************************;
 * ANIMATION SCENE
 **************************************************/

const loadWalls = () => {
	loader.load( 'models/walls.obj', function ( object ) {	
		object.traverse( function ( child ) {
			if ( child instanceof THREE.Mesh != true){
				return;
			}	
			if( typeof child.geometry.attributes.position.array != "object" ){ 
				return;
			}	
			model.walls = new THREE.Mesh(
			    child.geometry
	          ,	new THREE.MeshPhongMaterial({
					color:      0xffffff, 
					specular:   0x222222,
					shininess:  1,
					map:        null,
					normalMap:  null,
					aoMap:      null, 		
					alphaTest:  0.5,
					visible:    true 
			  }) 					
			)
			model.walls.position.set( 0, -300, 0 ) 
			scene.add( model.walls )
			
			addMessWallsLoaded() 
			loadRoof()
		});	
	}); 
}

const loadRoof = () => {
	loader.load( 'models/roof.obj', function ( object ) {	
		object.traverse( function ( child ) {
			if ( child instanceof THREE.Mesh != true){
				return;
			}	
			if( typeof child.geometry.attributes.position.array != "object" ){ 
				return;
			}	
			model.roof = new THREE.Mesh(
			    child.geometry
	          ,	new THREE.MeshPhongMaterial({
					color:      0xffffff, 
					specular:   0x222222,
					shininess:  1,
					map:        null,
					normalMap:  null,
					aoMap:      null, 		
					alphaTest:  0.5,
					visible:    true 
			  }) 					
			)
			model.roof.position.set( 0, -300, 0 ) 
			addMessRoofLoaded() 

			
			loadWindows()
		});	
	}); 
}

const loadWindows = () => {
	loader.load( 'models/windows.obj', function ( object ) {	
		object.traverse( function ( child ) {
			if ( child instanceof THREE.Mesh != true){
				return;
			}	
			if( typeof child.geometry.attributes.position.array != "object" ){ 
				return;
			}	
			model.windows = new THREE.Mesh(
			    child.geometry
	          ,	new THREE.MeshPhongMaterial({
					color:      0xffffff, 
					specular:   0x222222,
					shininess:  1,
					map:        null,
					normalMap:  null,
					aoMap:      null, 		
					alphaTest:  0.5,
					visible:    true 
			  }) 					
			)
			model.windows.position.set( 0, -300, 0 ) 
			addMessWindowsLoaded() 
		});	
	}); 
}

/**************************************************;
 * Ui
 **************************************************/
 
const addMessWallsLoaded = () => {
	let mess = document.createElement( 'div' )
	mess.innerHTML = 'wallsLoaded' 
    ui.appendChild( mess )	
	
	let butt1 = document.createElement( 'button' )
    butt1.innerHTML = 'showWalls' 	
	butt1.onclick = () =>  scene.add( model.walls ) 
    ui.appendChild( butt1 )

	let butt2 = document.createElement( 'button' )
    butt2.innerHTML = 'hideWalls' 	
	butt2.onclick = () =>  scene.remove( model.walls ) 
    ui.appendChild( butt2 )	
}	

const addMessRoofLoaded = () => {
	let mess = document.createElement( 'div' )
	mess.innerHTML = 'roofLoaded' 
    ui.appendChild( mess )	
	
	let butt1 = document.createElement( 'button' )
    butt1.innerHTML = 'showRoof' 	
	butt1.onclick = () =>  scene.add( model.roof ) 
    ui.appendChild( butt1 )

	let butt2 = document.createElement( 'button' )
    butt2.innerHTML = 'hideRoof' 	
	butt2.onclick = () =>  scene.remove( model.roof ) 
    ui.appendChild( butt2 )	
}	

const addMessWindowsLoaded = () => {
	let mess = document.createElement( 'div' )
	mess.innerHTML = 'windowsLoaded' 
    ui.appendChild( mess )	
	
	let butt1 = document.createElement( 'button' )
    butt1.innerHTML = 'showWindows' 	
	butt1.onclick = () =>  scene.add( model.windows ) 
    ui.appendChild( butt1 )

	let butt2 = document.createElement( 'button' )
    butt2.innerHTML = 'hideWindows' 	
	butt2.onclick = () =>  scene.remove( model.windows ) 
    ui.appendChild( butt2 )	
}


			
			
			//scene.add( model.roof )


/**************************************************;
 * resize scene
 **************************************************/

const handleWindowResize = () => {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
}

window.addEventListener('resize', handleWindowResize, false);

initScene()
animate()
loadWalls()




