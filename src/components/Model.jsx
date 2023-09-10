import React from "react";
import { useGLTF } from "@react-three/drei";


function Model(props) {
  const model = useGLTF("scifi_girl_v.01.glb")

  return ( 
    <mesh>
      <primitive object={model.scene}/>
    </mesh>

   );
}

export default Model;