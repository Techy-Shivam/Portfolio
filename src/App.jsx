import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Routers from './Routes/Routers'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routers/>
      <Footer/>
    </>
  )
}

export default App