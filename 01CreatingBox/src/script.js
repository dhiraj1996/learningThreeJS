import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// initialize the scene
const scene = new THREE.Scene()

// add objects to the scene
const cubeGeometry = new THREE.BoxGeometry(2,2,2)
const cubeMaterial = new THREE.MeshBasicMaterial({color: "red"})

const cubeMesh = new THREE.Mesh(
  cubeGeometry,
  cubeMaterial
)
scene.add(cubeMesh)

// initialize the perspective camera
// const camera = new THREE.PerspectiveCamera(
//   75, //how much camera is close or far angle <
//   window.innerWidth / window.innerHeight,
//   0.1,  //how much close but should be lesser than z=5
//   300) //far
// camera.position.z = 5

const aspectRatio = window.innerWidth / window.innerHeight;
//initializing orthographic camera
const camera = new THREE.OrthographicCamera(
  -3 * aspectRatio,
  3 * aspectRatio,
  3,
  -3,
  0.1,
  200
)
camera.position.z = 5

// initialize the renderer
const canvas = document.querySelector('canvas.threejs')
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(window.innerWidth, window.innerHeight)

//initialize the controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true;
controls.autoRotate = true;


const renderLoop = () =>{
  controls.update();
  renderer.render(scene, camera)
  window.requestAnimationFrame(renderLoop)
}

renderLoop();
