import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchFilter from './SearchFilter'

const Navbar = () => {
  return (
    <div className='w-full fixed top-0 left-0 py-6 border border-gray-100 bg-white z-10'>
      <div className='max-w-[1500px] mx-auto px-6'>
        <div className='flex justify-between items-center'>
            <Link href="/">
                <Image
                    src="/logo.png"
                    alt="DjangoBnB Logo"
                    width={180}
                    height={38}
                    className="cursor-pointer"
                />
            </Link>
            <div className='flex space-x-6'>
                <SearchFilter />
            </div>
            <div className='flex items-center space-x-6'>
                Add Property - User Nav
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
