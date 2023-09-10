import {useState, useEffect} from 'react'
import { useNavigate, Link, NavLink } from 'react-router-dom';
import {Canvas} from '@react-three/fiber';
import { Environment } from '@react-three/drei';

import Typewriter from './Typewriter'
import preamble from'../assets/preamble.jpg'


const Home = () => {

    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
      // Function to handle scroll events
      const handleScroll = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        if (scrollY > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [scrollY > 300]);

  return (
    <div className='relative mb-[10vh]'>
      <div className='text-5xl lg:text-7xl font-bold italic font-poppins flex justify-center mt-[30vh] shadow-blue-500 hover:text-6xl hover:lg:text-8xl transition-all duration-300'>
        SamvidhanAI
      </div>
      <div className='flex justify-center mt-[30vh] gap-[15%]'>
        <Link to='/LLBGPT'>
          <button className='bg-white bg-opacity-10 hover:bg-opacity-100 hover:text-black text-white rounded-md p-5 text-lg duration-300'>LLB GPT</button>
        </Link>
        <Link to='/DocDrafter'>
            <button className='bg-white bg-opacity-10 hover:bg-opacity-100 hover:text-black text-white rounded-md p-5 text-lg duration-300'>Doc Drafter</button>
        </Link>
      </div>
      <div className='mt-[30vh] font-[500] font-poppins'>
        <div className=' flex gap-10 flex-col xl:flex-row justify-center lg:justify-normal items-center xl:items-start'>
          <div className="flex justify-center xl:pl-20 relative max-w-screen-xl">
              <img className={`w-1/2 md:w-full border-2 p-3 m-2 transition-transform duration-300 ${isVisible ? 'translate-x-0' : '-translate-x-full'}`} src={preamble} />
          </div>
          <div className="flex flex-col w-2/3 justify-center items-center typewriter">
            <p className={` text-white text-center mt-[13vw] xl:mt-0 text-5xl xl:text-6xl ${isVisible ? 'opacity-100' : 'opacity-0'} font-semibold font-poppins duration-1000`}>THE CONSTITUTION OF INDIA</p>
            <div className={`normaltxt mt-[10vw] xl:mt-0 xl:p-20 text-lg xl:text-2xl xl:tracking-[.3rem] tracking-[.1rem] xl:leading-[3.5rem] leading-[3rem] duration-500 text-center ${isVisible ? 'opacity-100' : 'opacity-0'}`} >
              <Typewriter speed={87} repeat={0} text="The Constitution of India, adopted in 1950, is the supreme law of the country. It provides the framework for governance, defining the structure of government, fundamental rights, and duties of citizens. India's constitution is known for its democratic principles, secularism, and commitment to social justice. It guarantees individual freedoms and equality under the law. It also establishes a federal structure with a division of powers between the central and state governments. The Constitution of India is one of the world's lengthiest written constitutions, reflecting the nation's diverse culture, values, and commitment to democracy."/>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    
  )
}

export default Home
