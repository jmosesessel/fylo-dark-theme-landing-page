import HeroImage from '../assets/images/illustration-intro.png'
export default function Hero() {
  return (
    <div className='mb-[2.06rem] px-9'>
        <img className='w-[19rem]' src={HeroImage} alt='hero image' />
    </div>
  )
}