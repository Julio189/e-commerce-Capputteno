'use client';

import React from 'react'
import CartIcon from './icons/CartIcon'
import useLocalStorage from '@/hooks/useLocalStorage'
function CartControll() {
    const { value } = useLocalStorage('cartItems', [])
  return (
    <div className='relative'>
        <CartIcon/>
        {value.length > 0 && (
             <span 
             className='absolute w-4 h-4 top-[50%] bg-deleteColor rounded-full text-white text-xs'
           >
             {value.length}
           </span>
        )}
     
    </div>
  )
}

export default CartControll
