// loadModel.js
import * as THREE from 'three';
import { STLLoader } from 'three/addons/loaders/STLLoader.js';

export function loadSTLModel(modelPath, callback) {
  const loader = new STLLoader();
  loader.load(modelPath, (geometry) => {
    const material = new THREE.MeshNormalMaterial();
    const model = new THREE.Mesh(geometry, material);
    callback(model);
  });
}
