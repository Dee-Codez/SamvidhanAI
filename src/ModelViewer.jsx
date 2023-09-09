import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';

function ModelViewer() {
  const gltf = useLoader(GLTFLoader, './google.gltf'); // Replace with the path to your .gltf model

  const modelScale = 10;

  return (
    <Canvas>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <primitive object={gltf.scene} scale={[modelScale, modelScale, modelScale]} />
      </Suspense>
    </Canvas>
  );
}

export default ModelViewer;
