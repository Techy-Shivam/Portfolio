import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AllProjects from '../pages/AllProjects'
const Routers = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<AllProjects/>}/>
        </Routes>
    </div>
  )
}

export default Routers