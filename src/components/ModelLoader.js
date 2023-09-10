import * as THREE from "three"
import { OrbitControls } from "@react-three/drei"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const canvas = document.querySelector("canvas.webgl")

const sizes = {
    width:window.innerWidth,
    height:window.innerHeight
}

const scene = new THREE.Scene()