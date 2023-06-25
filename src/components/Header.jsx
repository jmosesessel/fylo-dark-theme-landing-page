import logo from '../assets/images/logo.svg'

function Header() {
  return (
    <div className='w-full h-[1.5rem] mt-[1.5rem] mb-[3rem] px-[1.25rem] flex justify-between items-center text-white'>
        <img className='w-[80px] h-[23.56px] hover:cursor-pointer' src={logo} alt="logo" />
        <ul className='flex gap-x-4 list-none text-[12px]'>
            <li className='hover:cursor-pointer'>Features</li>
            <li className='hover:cursor-pointer'>Team</li>
            <li className='hover:cursor-pointer'>Sign In</li>
        </ul>
    </div>
  )
}

export default Header
