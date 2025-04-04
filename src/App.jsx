import React from 'react'
import NavBar from './Components/NavBar'
import HomePage from './Pages/HomePage'
import Footer from './Components/Footer'


const App = () => {
  return (
    <div className='w-full'>
      <NavBar />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App