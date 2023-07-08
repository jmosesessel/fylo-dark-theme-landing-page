import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HeroImage from './components/Hero'
import IntroText from './components/IntroText'
import FeatureList from './components/FeatureList'
import StayProductive from './components/StayProductive'
import TestimonialList from './components/TestimonialList'
import FooterWrap from './components/FooterWrap'
import MobileCurvyBgImg from './assets/images/bg-curvy-mobile.svg'
import DesktopCurvyBgImg from './assets/images/bg-curvy-desktop.svg'

function App() {

  return (
    
      <main className=' min-w-full min-h-screen bg-dark-blue-main'>
        <Header />
        <HeroImage />
        <div >
          <IntroText className=" bg-no-repeat style={{backgroundImage: `url(${MobileCurvyBgImg})`}}" />
          <FeatureList />
          <StayProductive />
          <TestimonialList />
        
        
          <FooterWrap />
        </div>
      </main>
    
  )
}

export default App
