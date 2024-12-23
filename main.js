import * as THREE from 'three';

const containerEl = document.querySelector(".container");
const canvasEl = document.querSelector("#tree-canvas");

const params = {
  stripesNumber: 15,
  stripeWidth: .03,
}

const pointer = new THREE.Vector2();

let renderer, scene, camera, orbit, lightHolder, touchPlane,  raycaster;
let ballCeometry, stripeGeometry;
const stripes = [];
const balls = [];

initScene();
render();
window.addEventListener("resize", updateSceneSize);
window.addEventListener("click", e => {
  pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  const intersects = raycaster.intersectObject(touchPlane);
  if (intersects) {
      addBall(intersects[0].point, balls.length -1, performance.now());
  }
});

function initScene() {
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: canvasEl,
    alpha: true
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
