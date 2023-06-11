import logo from '../assets/images/logo.svg'

function Header() {
  return (
    <div className='w-full h-[24px] my-6 px-5 flex justify-between items-center text-white'>
        <img className='w-[80px] h-[23.56px]' src={logo} alt="logo" />
        <ul className='flex gap-x-4 list-none text-[12px]'>
            <li>Features</li>
            <li>Team</li>
            <li>Sign In</li>
        </ul>
    </div>
  )
}

export default Header
