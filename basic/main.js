import * as THREE from 'three';

// Create de scene
// Add the camera
// Create an object (cube this time)
// Add lightening
// Set up the rendered
// Animate the scene

// 1 CREATE A SCENE

const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

// 2 ADD THE CAMERA
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 5;

// 3 CREATE AN OBJECT

// Primero creas la geometria, luego el material. Esto conformara a tu objeto
// Aqui puedes agregar cualquier tipo de geometria, iremos por box
const geometry = new THREE.IcosahedronGeometry();
// Aqui puedes agregar cualquier tipo predeterminado de materia, iremos por mesh
const material = new THREE.MeshLambertMaterial({
  color: '#468585',
  emissive: '#468585',
});

// Una vez definidos la geometria y el material, crea tu objeto y le pasamos el goemetry y material como argumentos:
const cube = new THREE.Mesh(geometry, material);

// agreguemos el cubo a la escena:
scene.add(cube);

// 4 ADD LIGHTING
const light = new THREE.DirectionalLight(0x9cdba6, 10);
light.position.set(1, 1, 1);
scene.add(light);

// 4 SET UP RENDERED

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ADD ANIMATION
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
