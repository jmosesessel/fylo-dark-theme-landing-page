import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HeroImage from './components/Hero'

function App() {

  return (
    <>
      <main className='w-full h-screen bg-[#1B2330]'>
        <Header />
        <HeroImage />
      </main>
    </>
  )
}

export default App
