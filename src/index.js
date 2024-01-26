import './styles.css'
import * as THREE from 'three';
import gsap from 'gsap';

console.log(gsap)
// Scene Mesh Camera Renderer

//Scene
const scene = new THREE.Scene()

//Group

const group = new THREE.Group()

//Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: "purple"});
const mesh = new THREE.Mesh(geometry, material);

//Mesh2
const material2 = new THREE.MeshBasicMaterial({color: 'green'})
const mesh2 = new THREE.Mesh(geometry, material2);
mesh2.position.y = 2;

group.add(mesh, mesh2)
group.position.x = 1;

scene.add(mesh);

gsap.to(mesh.position, {duration: 1, delay: 1, x:1})
gsap.to(mesh.position, {duration: 2, delay: 2, x:-1})

//AxesHelper
const axesHelper = new THREE.AxesHelper(4)

// scene.add(axesHelper)

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
