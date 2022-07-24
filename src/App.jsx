import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Info from './components/Info'
import '../styles/Home.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/info' element={<Info />} />
        </Routes>
      </Router>
      <div className='container-p'>
        <p>Made with love by Abraham-Moreno 💙</p>
      </div>
    </>
  )
}

export default App
