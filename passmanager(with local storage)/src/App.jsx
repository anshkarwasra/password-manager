import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'
function App() {


  return (
    <>
      <Navbar/>
      <div className="min-h-[110vh]"><Manager/></div>
      <Footer/>
    </>
  )
}

export default App
