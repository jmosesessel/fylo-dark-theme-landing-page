import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HeroImage from './components/Hero'
import IntroText from './components/IntroText'
import FeatureList from './components/FeatureList'
import StayProductive from './components/StayProductive'
import TestimonialList from './components/TestimonialList'

function App() {

  return (
    
      <main className='min-w-full min-h-screen bg-dark-blue-main'>
        <Header />
        <HeroImage />
        <IntroText />
        <FeatureList />
        <StayProductive />
        <TestimonialList />
      </main>
    
  )
}

export default App
