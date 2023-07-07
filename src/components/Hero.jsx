import HeroImage from '../assets/images/illustration-intro.png'
export default function Hero() {
  return (
    <div className='mb-[2.06rem] lg:mb-[2.25rem] px-9 flex justify-center w-full'>
        <img className='w-[19rem] lg:w-[45rem] h-[14.0625rem] lg:h-[33.375rem]' src={HeroImage} alt='hero image' />
    </div>
  )
}