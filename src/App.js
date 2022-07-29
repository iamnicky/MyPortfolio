import React from 'react';
import './App.css';
import Card from './components/Card';
import { useState } from 'react';
import Details from './components/Details';
import Footer from './components/Footer';




function App() {
  const [darkMode,setDarkMode]=useState(false);

  return (
    <div className={`${darkMode&& darkMode?'dark-mode':'light-mode'}` }>
<button className=' text-green-800 border-4 rounded shadow-3xl border-gray-300 bg-yellow-300  m-4' onClick={() => setDarkMode((previousDarkMode) => !previousDarkMode)}><img src="https://img.icons8.com/color/48/000000/back-sorting.png" /></button>

       <div className=' m-8 p-2 '>
       
      <div className=' p-32   '>
      <h1 className='text-7xl  
     flex-wrap text-center text-gray-300 font-bold  mx-16  p-8'>Hey, It's me <span className='text-blue-500'>Nicky</span> Kumari</h1>
     <p className='text-xl text-gray-400 font-bold text-center'>MERN stack web developer, Quick learner, Self motivated, Curious person</p>
     
<div className='flex mt-8 space-x-4 justify-center'>
  <button className='flex text-white text-xl bg-gray-700 rounded p-4 hover:shadow-lg hover:shadow-cyan-500/50  px-8  '>Explore </button>
  <button className='text-white text-xl border p-4 rounded hover:shadow-lg hover:shadow-orange-500/50 px-8 '>Resume</button>
  
</div>
     
      </div>
      
      <Card/>
   <div className='mt-32 text-center p-8  '>
   <h1 className='font-bold text-5xl  '>Let's talk about my coding skills, technical skills and whatever you want to hire me. Please have a look.</h1>

   <div className='m-16 mx-80 '>
    <h1 className='text-4xl font-bold'>Focus on solving bigger problems</h1>
    <p className='text-2xl font-bold text-gray-500'>I am the kind of person who deals with problems everyday and tries to solve them until they are solved. If you have any problem regarding technology in which I have little bit knowledge I will try to solve it.</p>

    <h1 className='text-3xl font-bold'>Which code editor I use</h1>
    <p className='text-2xl font-bold text-gray-500'>I am using VS Code for coding because VS Code comes up with better user interface lot's of extensions. Navigation from one folder to another folder is so easy and the most important thing is vs code user experience.</p>
    <div className='flex space-x-4 justify-center mt-8'>
    <button className='flex text-white text-xl bg-gray-700 rounded p-4 hover:shadow-lg hover:shadow-cyan-500/50  px-8  '>vs code icons </button>
    </div>
    

    <h1 className='text-3xl font-bold'>Want to see my project?</h1>
    <p className='text-2xl font-bold text-gray-500'>I am the kind of person who learns from making projects and implements concepts through out making projects. These are my best projects which really inspire you.</p>
    <div className='flex space-x-4 justify-center mt-8'>
    <button className='flex text-white text-xl bg-gray-700 rounded p-4 hover:shadow-lg hover:shadow-cyan-500/50  px-8  '>project 1 </button>
    <button className='flex text-white text-xl bg-gray-700 rounded p-4 hover:shadow-lg hover:shadow-cyan-500/50  px-8  '>project 2  </button>
    <button className='flex text-white text-xl bg-gray-700 rounded p-4 hover:shadow-lg hover:shadow-cyan-500/50  px-8  '>project 3 </button>
    </div>

    
    
   </div>
   <h1 className='text-3xl font-bold'>There are many intersting project on my GitHub profile. Please have a look and follow below steps for each repo and enjoy.</h1>
   <p className='flex flex-col font-mono mt-8'>
    <span>git clone repo_link</span>
    <span>yarn install / npm install </span>
    <span>yarn start / npm run start (React project )</span>
    <span>yarn run dev (Next Project)</span>

   </p>
   
   
   
   
  

  
  
   </div>

   <Details/>
   <Footer/>
    
      </div>
      </div>
      
    
  );
}

export default App;
