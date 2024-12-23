import * as THREE from 'three';

const containerEl = document.querySelector(".container");
const canvasEl = document.querSelector("#tree-canvas");

const params = {
  stripesNumber: 15,
  stripeWidth: .03,
}

const pointer = new THREE.Vector2();

left renderer, scene, camera, orbit, lightHolder, touchPlane,  raycaster;
