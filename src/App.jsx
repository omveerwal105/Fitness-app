import React from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'


const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard'element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App