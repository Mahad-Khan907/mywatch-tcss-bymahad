import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center p-5'>
      <form action="/submit" method='POST' className='w-full max-w-[600px] sm:min-w-md md:min-w-md bg-white p-14 rounded-lg shadow-md'>
      
        <h1 className='text-3xl font-bold text-center mb-6 mt-10'>Contact Us</h1>
        <div className=' mb-6'>
      <label htmlFor="name" className=" text-lg font-medium">Name</label>
      <input type="name" name='name' id='name' placeholder=' write your name' required 
      className='w-full h-8 border border-gray-400'/></div>

      
      <div className=' mb-6'>
      <label htmlFor="email" className="block text-lg font-medium">Email</label>
      <input type="email" name='email' id='email' placeholder=' write your email' required 
      className='w-full h-8 border border-gray-400'/></div>


      <div className=' mb-6'>
      <label htmlFor="message" className="block text-lg font-medium">Message</label>
      <textarea name='message' id='message' placeholder=' write your message' required
      className='w-full h-28 border border-gray-400' />
      </div>
      <button className='bg-orange-500 p-2 px-3 w-full max-w-[300px] text-white rounded-lg font-bold flex items-center justify-center m-auto'>Send Message</button>
      </form>
      
    </div>
  )
}

export default page
