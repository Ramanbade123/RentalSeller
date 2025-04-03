import React from 'react'
import CubicBezierCard from './Components/Features'
import NavBar from './Components/NavBar'


const App = () => {
  return (
    <div className='w-full'>

      <NavBar />
      <div className='bg-blue-600 w-full h-[100dvh]' />
      <CubicBezierCard />
    </div>
  )
}

export default App