import React from 'react'
import Button from './Button'

function IntroText() {
  return (
    <div>
        <h1 className='text-[24px] font-Raleway text-center px-5 text-white font-bold'>All your files in one secure location, accessible anywhere.</h1>
        <p className='text-white px-10 pt-5 text-center'>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
        <div className='flex justify-center mt-8'>
            <Button width='w-60' text='Get Started' />
        </div>
    </div>
    )
}

export default IntroText