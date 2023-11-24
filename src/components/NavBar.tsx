"use client"
import Link from 'next/link'
import React, {useState} from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaRegUserCircle, FaShoppingCart  } from "react-icons/fa";
import { MdSegment } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

function NavBar() {

  const [showbox, setShowBox] = useState(false)
  const toggle = () => {
    setShowBox(!showbox);
  }

  return (
    <div>
      <nav className="bg-white shadow-xl h-12 py-2 px-3 flex justify-between items-center fixed w-screen">
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-green-600">IndMart</div>
        <div className='hidden md:block'>
          <div className="flex space-x-4 font-semibold">
          <Link href="/">Home</Link>
          <Link href="/men">Men</Link>
          <Link href="/women">Women</Link>
          <Link href="/beauty">Beauty</Link>
          <Link href="/studio">Studio</Link>
        </div>
        </div>
        
        <div className="border py-1 px-3 rounded-full hidden md:block">
          <div className="flex space-x-3 items-center">
            <input type="text" className='outline-none pl-2'/>
            <IoIosSearch />
          </div>
        </div>
        
        <div className="hidden md:block">
          <div className="flex space-x-4 text-xl">
          <FaRegUserCircle />
          <FaShoppingCart />
        </div>
        </div>
        
        <div className="justify-end md:hidden text-2xl pr-2" onClick={toggle}>
          {showbox ? <RxCross2 />:<MdSegment />}
        </div>
      </nav>

      <div className="flex flex-col px-4 space-y-4 bg-white shadow-lg">
        {showbox &&
        (<div className="flex flex-col space-y-4 font-semibold">
          <Link onClick={toggle} href="/">Home</Link>
          <Link onClick={toggle} href="/men">Men</Link>
          <Link onClick={toggle} href="/women">Women</Link>
          <Link onClick={toggle} href="/beauty">Beauty</Link>
          <Link onClick={toggle} href="/studio">Studio</Link>
        </div>)}
        {showbox && (<div className="border py-1 px-3 rounded-full">
          <div className="">
            <div className="flex space-x-3 items-center">
            <input type="text" className='outline-none pl-2 w-full'/>
            <IoIosSearch onClick={toggle}/>
          </div>
          </div>
        </div>)}
        {showbox && (<div className="flex space-x-4 text-xl py-4" onClick={toggle}>
          <FaRegUserCircle />
          <FaShoppingCart />
        </div>)}
      </div>
    </div>
  )
}

export default NavBar

