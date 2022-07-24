import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Info from './components/Info'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/info' element={<Info />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
