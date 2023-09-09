import './App.css'
import { useState, useEffect, useRef } from 'react';
import preamble from'./assets/preamble.jpg'
import { TypeAnimation } from 'react-type-animation';
import emblem from './assets/Emblem.png'
import {StlViewer} from "react-stl-viewer";
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'

import { Emblem3d } from './Emblem3d';
import ModelViewer from './ModelViewer';
import Typewriter from './components/Typewriter';

function App() {

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY > 100]);

  return (
    <div className='relative'>
      <div className='text-5xl lg:text-7xl font-bold italic font-poppins flex justify-center mt-[30vh] shadow-blue-500 hover:text-6xl hover:lg:text-8xl transition-all duration-300'>
        SamvidhanAI
      </div>
      <div className='flex justify-center mt-[30vh] gap-[15%]'>
        <button className='bg-white bg-opacity-10 hover:bg-opacity-100 hover:text-black text-white rounded-md p-5 text-lg duration-300'>LLB GPT</button>
        
        <button className='bg-white bg-opacity-10 hover:bg-opacity-100 hover:text-black text-white rounded-md p-5 text-lg duration-300'>Doc Drafter</button>
      </div>
      <div className='mt-[30vh] font-[500] font-poppins'>
        <div className=' flex gap-10 flex-col xl:flex-row justify-center lg:justify-normal items-center xl:items-start'>
          <div className="flex justify-center xl:pl-20 relative max-w-screen-xl">
              <img className={`w-1/2 md:w-full border-2 p-3 m-2 transition-transform duration-300 ${isVisible ? 'translate-x-0' : '-translate-x-full'}`} src={preamble} />
          </div>
          <div className="flex flex-col w-2/3 justify-start typewriter">
            <p className={`text-white text-center mt-[13vw] xl:mt-0 text-5xl xl:text-6xl ${isVisible ? 'opacity-100' : 'opacity-0'} font-semibold font-poppins duration-1000`}>THE CONSTITUTION OF INDIA</p>
            <div className='normaltxt'>
              <Typewriter/>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default App
