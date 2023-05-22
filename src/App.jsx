import { useState } from 'react'
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';

const App = () => {
  return(
    <div className="bg-[#1E1E1E] h-full">
      <Navbar />
      <MainSection />
    </div>
  )
}

export default App
