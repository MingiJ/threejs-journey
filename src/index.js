import './styles.css'
import * as THREE from 'three';
import gsap from 'gsap';

console.log(gsap)
// Scene Mesh Camera Renderer

//Scene
const scene = new THREE.Scene()


//Mesh
const geometry = new THREE.BoxGeometry(0.5,0.5,0.5);
const material = new THREE.MeshBasicMaterial({color: "purple"});
const purleMesh = new THREE.Mesh(geometry, material);
purleMesh.position.x = 1;

//Mesh2
const material2 = new THREE.MeshBasicMaterial({color: 'yellow'})
const yellowMesh = new THREE.Mesh(geometry, material2);
yellowMesh.position.x = -1;

//Mesh3
const material3 = new THREE.MeshBasicMaterial({color: 'green'});
const greenMesh = new THREE.Mesh(geometry, material3);


//Mesh4
const material4 = new THREE.MeshBasicMaterial({color: "white"});
const whiteMesh = new THREE.Mesh(geometry, material4);
whiteMesh.position.set(1,1,0);

//Mesh5
const material5 = new THREE.MeshBasicMaterial({color: "pink"});
const pinkMesh = new THREE.Mesh(geometry, material5);
pinkMesh.position.set(-1,-1, 0);

//Mesh6
const material6 = new THREE.MeshBasicMaterial({color: "blue"});
const blueMesh = new THREE.Mesh(geometry, material6);
blueMesh.position.y = 1;
//Camera
const aspect = {
 width: window.innerWidth,
 height: window.innerHeight
}
const camera = new THREE.PerspectiveCamera(75,aspect.width/aspect.height)//near value is 1 and far value is 2000
camera.position.z = 3;
camera.position.x = 1;
camera.position.y = 1;
scene.add(camera)


//Renderer
const canvas = document.querySelector('.draw'); //select the canvas element
const renderer = new THREE.WebGLRenderer({canvas}) //add the WebGLRenderer
renderer.setSize(aspect.width, aspect.height); //Renderer size


const clock = new THREE.Clock()


const animate = () => {
    //Get Elapsed Time
    const elapsedTime = clock.getElapsedTime()

    //Linear Function
    
    renderer.render(scene, camera)
    window.requestAnimationFrame(animate)
}
animate()
