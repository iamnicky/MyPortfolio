import React from 'react'

function Details() {
  return (
    <div>
       
<div className='h-[540px] m-8 bg-white p-4 flex shadow-xl shadow-blue-500'>
<h1 className='text-black font-bold text-5xl flex items-center text-wrap  mx-4 mx-8 p-16 m-2 m-2 '>Lets talk about everything!</h1>


<div className=' p-16 m-8'>
<div className='mt-8 space-x-4'>
<label for="email" className="mb-2 text-lg font-medium text-gray-900 text-xl ">Your email</label>
<input type="email" name="email" id="email" className='bg-black w-80 text-xl p-2 ' placeholder="username@gamil.com" required></input>


</div>
<div className='space-x-4 mt-8'>
<label for="password" className="mb-2 text-lg font-medium text-gray-900 text-xl ">Your password</label>
<input type="password" name="password" id="password" placeholder="••••••••" className='bg-black w-80 text-xl p-2'/>
</div>
<div className='flex space-x-4 mt-8'>
<label for="message" className="mb-2 text-lg font-medium text-gray-900 text-xl ">Your message</label>
<textarea id="message"   placeholder="Your message..."  rows="5" className='w-[450px]  overflow-hidden bg-black p-4'></textarea>
</div>
</div>

</div>




    </div>
  )
}

export default Details