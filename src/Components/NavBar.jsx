import React from 'react'
import ProductCategory from './ProductsCategories'
import { Link } from 'react-router-dom'
import { useCart } from '../GlobalState/CartContext';
import { FaUser } from 'react-icons/fa6';
import { BsSearch } from "react-icons/bs";
import { GiSelfLove } from "react-icons/gi";
import { BsCart4 } from "react-icons/bs";
const NavBar = ({ toggleCart }) => {
    const { cartItems, wishlistItems } = useCart();
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const wishListItemCount = wishlistItems.length;

    return (
        <div className='w-full h-[25dvh] bg-white'>
            <div className='bg-black text-white w-full h-[20%] text-[13px] !py-[5px] text-center'>NEW ARRIVALS - SPRING-SUMMER 25 - PREMIUM LINEN SUMMER COLLECTIONS</div>

            <div className='relative flex items-center w-full h-[50%]'>
                <Link to={"/"} className='w-full z-1 flex items-center gap-2 sm:gap-4 px-[10px] justify-start md:justify-center'>
                    <div className=''>
                        <img src="/logo.svg" alt="logo" className='h-full w-[30px] sm:w-[40px] md:w-[50px] object-cover ' />
                    </div>
                    <h1 className='meow-script-regular text-2xl sm:text-3xl md:text-5xl'>RenTour</h1>
                </Link>
                <div className='absolute z-2 right-4 w-fit h-full flex top-[50%] -translate-y-[50%] items-center justify-end gap-4 sm:gap-x-8 text-[16px] sm:text-[24px]'>
                    <FaUser />
                    <BsSearch />
                    <Link to={"/wishlist"} className='relative'>
                        <GiSelfLove />
                        {wishListItemCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                {wishListItemCount}
                            </span>
                        )}
                    </Link>
                    <div onClick={() => toggleCart()} className='relative cursor-pointer'>
                        <BsCart4 className='text-[16px] sm:text-[26px]' />
                        {cartItemCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                {cartItemCount}
                            </span>
                        )}
                    </div>
                </div>
            </div>
            <div className='w-full h-[30%]'>
                <ProductCategory />
            </div>
        </div>
    )
}

export default NavBar