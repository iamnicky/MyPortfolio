import React from 'react';
import './App.css';
import Card from './components/Card';
import { useState } from 'react';




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
   <div className='mt-32 text-center mx-80'>
   <h1 className='text-4xl flex justify-center  font-bold text-white '>Let's talk about my coding skills, technical skills and whatever you want to hire me. Please have a look.</h1>
  

  
  
   </div>
    
      </div>
      </div>
      
    
  );
}

export default App;
