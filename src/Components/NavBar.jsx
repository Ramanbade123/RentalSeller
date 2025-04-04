import React from 'react'
import ProductCategory from './ProductsCategories'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='w-full h-[29dvh]'>
            <div className='bg-black text-white w-full text-[13px] !py-[5px] text-center'>NEW ARRIVALS - SPRING-SUMMER 25 - PREMIUM LINEN SUMMER COLLECTIONS</div>
            <div className='relative flex items-center w-full h-[40%]'>
                <Link to={"/"} className='w-full z-1 flex items-center gap-2 sm:gap-4 justify-center'>
                    <div className=''>
                        <img src="/logo.svg" alt="logo" className='h-full w-[50px] object-cover ' />
                    </div>
                    <h1 className='heading font-semibold font-mono text-5xl'>RenTour</h1>
                </Link>
                <div className='absolute z-2 right-4 w-[20%] h-full flex top-[50%] -translate-y-[50%] items-center justify-around text-[15px] font-light'>
                    <img src="/icons/user.svg" alt="" />
                    <img src="/icons/search.svg" alt="" />
                    <img src="/icons/wishlist.svg" alt="" />
                    <img src="/icons/cart.svg" alt="" />
                </div>
            </div>
            <div className='w-full'>
                <ProductCategory />
            </div>
        </div>
    )
}

export default NavBar