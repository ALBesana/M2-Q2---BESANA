import * as THREE from 'three';

// Scene and camera 
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// test if the rename works

// Window
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

// Box Geometry
const boxGeometry = new THREE.BoxGeometry( 1, 1, 1 );
const boxMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( boxGeometry, boxMaterial );
scene.add( cube );

// Cone Geometry
const coneGeometry = new THREE.ConeGeometry( 1.5, 3, 8 );
const coneMaterial = new THREE.MeshBasicMaterial( { color: 0xffa500 } );
const cone = new THREE.Mesh(coneGeometry, coneMaterial);
cone.position.set( 3, 3, 0 );
scene.add( cone );

// Cylinder Geometry
const cylinderGeometry = new THREE.CylinderGeometry( 1, 1, 3, 8 );
const cylinderMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
cylinder.position.set( -3, 3, 0 );
scene.add( cylinder );

// Sphere Geometry
const sphereGeometry = new THREE.SphereGeometry( 1.875, 16, 8 );
const sphereMaterial = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set( -3, -3, 0 );
scene.add( sphere );

// Torus Geometry
const torusGeometry = new THREE.TorusGeometry( 2, 0.5, 12, 48 );
const torusMaterial = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
const torus = new THREE.Mesh(torusGeometry, torusMaterial);
torus.position.set( 3, -3, 0 );
scene.add( torus );

// camera position 
camera.position.z = 10;

// Animation
function animate() {

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	cone.rotation.x += 0.01;
	cone.rotation.y += 0.01;

	cylinder.rotation.x += 0.01;
	cylinder.rotation.y += 0.01;

	sphere.rotation.x += 0.01;
	sphere.rotation.y += 0.01;

	torus.rotation.x += 0.01;
	torus.rotation.y += 0.01;

	renderer.render( scene, camera );

}
renderer.setAnimationLoop( animate );