'use client';

import React from 'react'
import CartIcon from './icons/CartIcon'
import useLocalStorage from '@/hooks/useLocalStorage'
import { useRouter } from 'next/navigation';

function CartControll() {
    const { value } = useLocalStorage('cart-items', [])

    const router = useRouter()

    const handleClick = () => {
      router.push("/cart")
    }
  return (
    <button onClick={handleClick}
    className='relative'>
        <CartIcon/>
        {value.length > 0 && 
             <span 
             className='absolute w-4 h-4 top-[50%] bg-deleteColor rounded-full text-white text-xs'
           >
             {value.length}
           </span>
        }
     
    </button>
  )
}

export default CartControll
