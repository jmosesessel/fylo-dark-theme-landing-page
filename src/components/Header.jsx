import { defaults } from 'autoprefixer'
import logo from '../assets/images/logo.svg'

function Header() {
  return (
    <div className='w-full h-[24px] py-5 px-5 flex justify-between text-white'>
        <img className='w-[80px] h-[23.56px]' src={logo} alt="logo" />
        <nav className='flex gap-x-4'>
            <a href="">Features</a>
            <a href="">Team</a>
            <a href="">Sign In</a>
        </nav>
    </div>
  )
}

export default Header
