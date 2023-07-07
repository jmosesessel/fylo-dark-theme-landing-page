import React from 'react'
import ProductionBg from '../assets/images/illustration-stay-productive.png'
import ArrowIcon from '../assets/images/icon-arrow.svg'

function StayProductive() {
  return (
    <div className='flex flex-col lg:gap-[3.58rem] lg:flex-row lg:justify-center lg:items-center mb-[10rem] mx-[1.75rem]lg:mx-[6.25rem]'>
        <img className='mb-[3rem] mx-[2.25rem] lg:w-[38.42219rem] lg:h-[28.97706rem]' src={ProductionBg} alt="" />
        <div className='lg:w-[35.1875rem]'>
          <h3 className='text-lg lg:text-[2.5rem] font-bold text-white mb-4 text-center lg:text-left lg:w-[28.625rem] lg:leading-[3.125rem]'>Stay productive, wherever you are</h3>
          <p className='text-white mb-4 text-sm lg:text-[1rem]'>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
          <p className='text-white mb-4 text-sm lg:text-[1rem]'>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
          <p className='flex text-cyan text-xs cursor-pointer lg:text-[1rem]'>See how Fylo works <img className='ml-1' src={ArrowIcon} alt="" /></p>
          <div className='w-[130px] bg-cyan h-[1px]'></div>
        </div>
       

    </div>
  )
}

export default StayProductive