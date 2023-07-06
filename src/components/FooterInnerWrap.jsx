import React from 'react'
import Logo from '../assets/images/logo.svg'
import {FaLocationDot, FaPhoneVolume, FaRegEnvelope, FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa6'

function FooterInnerWrap() {
  return (
    <>
        <div className='px-[1.7rem] mb-14'>
            <img className='w-[6.75rem] h-[1.9375rem] pl-4 relative -top-[5.19rem]' src={Logo} alt="logo" />
        
            <div className='grid gird-cols-1 gap-10'>
                <div className='flex gap-6 justify-start relative'>
                    <FaLocationDot className='text-white text-5xl '/>
                    <p className=' font-open-sans text-white text-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                
                <div className='flex flex-col gap-3 justify-start relative '>
                    <div className=' flex gap-6'>
                        <FaPhoneVolume className='text-white text-lg justify-center items-center '/>
                        <p className=' font-open-sans text-white text-[1rem]'>+1-543-123-4567</p>
                    </div>

                    <div className=' flex gap-6'>
                        <FaRegEnvelope className='text-white text-2xl justify-center items-center '/>
                        <p className=' font-open-sans text-white text-[1rem]'>example@fylo.com</p>
                    </div>
                
                </div>

                <div className='flex flex-col gap-4 justify-start relative'>
                    <p className=' font-open-sans text-white text-[1rem]'>About Us</p>
                    <p className=' font-open-sans text-white text-[1rem]'>Jobs</p>
                    <p className=' font-open-sans text-white text-[1rem]'>Press</p>
                    <p className=' font-open-sans text-white text-[1rem]'>Blog</p>
                </div>

                <div className='flex flex-col gap-4 justify-start relative'>
                    <p className=' font-open-sans text-white text-[1rem]'>Contact Us</p>
                    <p className=' font-open-sans text-white text-[1rem]'>Terms</p>
                    <p className=' font-open-sans text-white text-[1rem]'>Privacy</p>
                </div>

                <div className='flex gap-4 justify-center relative text-white'>
                    <div className='border rounded-full p-2'>
                        <FaFacebookF className=' text-white'/>
                    </div>
                    <div className='border rounded-full p-2'>
                        <FaTwitter className=' text-white'/>
                    </div>
                    <div className='border rounded-full p-2'>
                        <FaInstagram className=' text-white'/>
                    </div>
                       
                </div>

                
            </div>
        </div> 
    </>
  )
}

export default FooterInnerWrap