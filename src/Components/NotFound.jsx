import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './NavBar'
export const Notfound = () => {
    return (
        <div className='content'>
            < Navbar />
            <div className='w-full h-dvh flex flex-col items-center justify-center text-3xl text-blue-600'>
                <h1>
                    404 Page Notfound
                </h1>
            </div>
        </div >
    )
}
