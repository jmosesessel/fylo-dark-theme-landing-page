import HeroImage from '../assets/images/illustration-intro.png'
export default function Hero() {
  return (
    <div className='py-6 px-9'>
        <img className='w-full' src={HeroImage} alt='hero image' />
    </div>
  )
}