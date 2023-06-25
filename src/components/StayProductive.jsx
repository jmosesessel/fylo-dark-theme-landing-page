import React from 'react'
import ProductionBg from '../assets/images/illustration-stay-productive.png'
import ArrowIcon from '../assets/images/icon-arrow.svg'

function StayProductive() {
  return (
    <div className='flex flex-col mb-[10rem] mx-[1.75rem]'>
        <img className='mb-[3rem] mx-[2.25rem]' src={ProductionBg} alt="" />
        <h3 className='text-lg font-bold text-white mb-4 text-center'>Stay productive, wherever you are</h3>
        <p className='text-white mb-4 text-sm'>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
        <p className='text-white mb-4 text-sm'>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
        <p className='flex text-cyan text-xs cursor-pointer'>See how Fylo works <img className='ml-1' src={ArrowIcon} alt="" /></p>
        <div className='w-[130px] bg-cyan h-[1px]'></div>

    </div>
  )
}

export default StayProductive