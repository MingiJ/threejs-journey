import './styles.css'
import * as THREE from 'three';
import gsap from 'gsap';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

console.log(gsap)
// Scene Mesh Camera Renderer

//Scene
const scene = new THREE.Scene()

//TextureLoader
const texture = new THREE.TextureLoader().load("/texture/color.jpg")

//Mesh
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: "yellow"});
const purpleMesh = new THREE.Mesh(geometry, material);


// //Mesh2
// const material2 = new THREE.MeshBasicMaterial({color: 'yellow'})
// const yellowMesh = new THREE.Mesh(geometry, material2);
// yellowMesh.position.x = -1;

// //Mesh3
// const material3 = new THREE.MeshBasicMaterial({color: 'green'});
// const greenMesh = new THREE.Mesh(geometry, material3);


// //Mesh4
// const material4 = new THREE.MeshBasicMaterial({color: "white"});
// const whiteMesh = new THREE.Mesh(geometry, material4);
// whiteMesh.position.set(1,1,0);

// //Mesh5
// const material5 = new THREE.MeshBasicMaterial({color: "pink"});
// const pinkMesh = new THREE.Mesh(geometry, material5);
// pinkMesh.position.set(-1,1, 0);

// //Mesh6
// const material6 = new THREE.MeshBasicMaterial({color: "blue"});
// const blueMesh = new THREE.Mesh(geometry, material6);
// blueMesh.position.y = 1;

scene.add(purpleMesh)

//Mouse Listener
const cursor = {
    x: 0,
    y: 0
}
//Camera
const aspect = {
 width: window.innerWidth,
 height: window.innerHeight
}
const camera = new THREE.PerspectiveCamera(75,aspect.width/aspect.height)//near value is 1 and far value is 2000
camera.position.z = 2.5;


scene.add(camera)


//Renderer
const canvas = document.querySelector('.draw'); //select the canvas element
const renderer = new THREE.WebGLRenderer({canvas}) //add the WebGLRenderer
renderer.setSize(aspect.width, aspect.height); //Renderer size

//Orbits
const orbitControls = new OrbitControls(camera, canvas)
orbitControls.enableDamping = true;
orbitControls.dampingFactor = 0.001;

//Resizing
window.addEventListener("resize", () => {
    //New Size
    aspect.width = window.innerWidth;
    aspect.height = window.innerHeight;

    //New Aspect Ratio
    camera.aspect = aspect.width / aspect.height
    camera.updateProjectionMatrix()
    orbitControls.update()

    //new renderer size
    renderer.setSize(aspect.width, aspect.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})


const clock = new THREE.Clock()


const animate = () => {
    //Get Elapsed Time
    const elapsedTime = clock.getElapsedTime()

    
    renderer.render(scene, camera)
    window.requestAnimationFrame(animate)
}
animate()
