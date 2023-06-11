import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HeroImage from './components/Hero'
import IntroText from './components/IntroText'

function App() {

  return (
    
      <main className='min-w-full min-h-screen'>
        <Header />
        <HeroImage />
        <IntroText />
      </main>
    
  )
}

export default App
