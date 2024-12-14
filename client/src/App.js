import React from 'react'
import Header1 from './components/Header1'
import './App.css'
import 'animate.css';
import ImageSection from './components/ImageSection';
import VisionSection from './components/VisionSection';
import BeyondAcademics from './components/BeyondAcademics';
import ExcellenceSection from './components/ExcellenceSection';


function App() {
  return (
    <div className='all flex flex-col items-center'>
       <Header1/>
       <ImageSection/>
       <VisionSection/>
       <ExcellenceSection/>       
    </div>
  )
}

export default App