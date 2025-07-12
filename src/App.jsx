import React from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Navbar from './components/Navbar'
import Progress from './Pages/Progress'


const App = () => {
  return (
    <div>

      <Navbar />

      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/progress'element={<Progress />} />
      <Route path='/dashboard'element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App