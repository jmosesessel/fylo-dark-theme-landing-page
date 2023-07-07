import React from 'react'
import Button from './Button'

function IntroText() {
  return (
    <div className=' lg:flex lg:flex-col lg:w-full lg:items-center '>
        <h1 className=' lg:w-[45.875rem] text-[1.5rem] lg:text-[2.5rem] font-Raleway text-center px-[1.75rem] mb-[0.94rem] text-white font-bold'>All your files in one secure location, accessible anywhere.</h1>
        <p className=' lg:text-xl text-white px-10 lg:px-[26.62rem]  text-center'>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
        <div className='flex justify-center mt-8'>
            <Button width='w-60 lg:w-[17.5rem]' text='Get Started' />
        </div>
    </div>
    )
}

export default IntroText