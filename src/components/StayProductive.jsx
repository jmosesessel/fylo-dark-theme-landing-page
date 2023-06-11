import React from 'react'
import ProductionBg from '../assets/images/illustration-stay-productive.png'
function StayProductive() {
  return (
    <div className='flex flex-col p-8'>
        <img className='mb-10' src={ProductionBg} alt="" />
        <h3 className='text-lg font-bold text-white mb-5 text-center'>Stay productive, wherever you are</h3>
        <p className='text-white mb-4'>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
        <p className='text-white mb-4'>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
        <p className='text-cyan text-[12px] cursor-pointer'>See how Fylo works </p>
        <div className='w-[130px] bg-cyan h-[1px]'></div>

    </div>
  )
}

export default StayProductive