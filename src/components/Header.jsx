import logo from '../assets/images/logo.svg'

function Header() {
  return (
    <div className='w-full h-[1.5rem] mt-[1.5rem] lg:mt-[4.56rem] mb-[3rem] lg:mb-[4.69rem] px-[1.25rem] lg:px-[5rem] flex justify-between items-center text-white'>
        <img className='w-[80px] lg:w-[11rem] h-[23.56px] lg:h-[3.25rem] hover:cursor-pointer' src={logo} alt="logo" />
        <ul className='flex gap-x-4 list-none text-[12px] lg:text-[1rem]'>
            <li className='hover:cursor-pointer'>Features</li>
            <li className='hover:cursor-pointer'>Team</li>
            <li className='hover:cursor-pointer'>Sign In</li>
        </ul>
    </div>
  )
}

export default Header
