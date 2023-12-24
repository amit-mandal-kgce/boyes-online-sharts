"use client"
import Link from 'next/link'
import React, {useState} from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaRegUserCircle, FaShoppingCart  } from "react-icons/fa";
import { MdSegment } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { usePathname } from 'next/navigation';
import { GoSignOut } from "react-icons/go";
import axios from 'axios';
import { useRouter } from 'next/navigation';

function NavBar() {
  const pathname = usePathname();

  const [showbox, setShowBox] = useState(false)
  const toggle = () => {
    setShowBox(!showbox);
  }
  // logout.................
  const router = useRouter()

  const logouTheUser = async () => {
    try {
      await axios.get('api/users/logout');
      router.push('/login');
    } catch (error: any) {
      console.log('Cannot logout User' + error.message)
    }
  }

  return (
    <div className='flex flex-col mt-[-4px]'>
      <nav className="bg-white shadow-xl h-12 py-2 px-3 flex justify-between items-center fixed w-screen z-50">
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-green-600">IndMart</div>
        <div className='hidden md:block'>
          <div className="flex space-x-4 font-semibold">
          <Link href="/profile" className={`link ${pathname === '/profile' ? 'active' : ''}`}>Home</Link>
          <Link href="/men" className={`link ${pathname === '/men' ? 'active' : ''}`}>Men</Link>
          <Link href="/women" className={`link ${pathname === '/women' ? 'active' : ''}`}>Women</Link>
          <Link href="/beauty" className={`link ${pathname === '/beauty' ? 'active' : ''}`}>Beauty</Link>
          <Link href="/studio" className={`link ${pathname === '/studio' ? 'active' : ''}`}>Studio</Link>
        </div>
        </div>
        
        <div className="border py-1 px-3 rounded-full hidden md:block">
          <div className="flex space-x-3 items-center">
            <input type="text" className='outline-none pl-2'/>
            <IoIosSearch />
          </div>
        </div>
        
        <div className="hidden md:block px-4">
          <div className="flex space-x-4 text-xl pr-4">
          <FaRegUserCircle />
          <FaShoppingCart />
          <GoSignOut onClick={logouTheUser}/>
        </div>
        </div>
        
        <div className="justify-end md:hidden text-2xl pr-2" onClick={toggle}>
          {showbox ? <RxCross2 className='text-red-500'/>:<MdSegment className='text-blue-300'/>}
        </div>
      </nav>
      <div className="flex flex-col mt-12 px-6 space-y-4 bg-white shadow-lg z-50">
        {showbox &&
        (<div className="flex flex-col space-y-4 font-semibold">
          <Link onClick={toggle} href="/profile" className={`link ${pathname === '/profile' ? 'active' : ''}`}>Home</Link>
          <Link onClick={toggle} href="/men" className={`link ${pathname === '/men' ? 'active' : ''}`}>Men</Link>
          <Link onClick={toggle} href="/women" className={`link ${pathname === '/women' ? 'active' : ''}`}>Women</Link>
          <Link onClick={toggle} href="/beauty" className={`link ${pathname === '/beauty' ? 'active' : ''}`}>Beauty</Link>
          <Link onClick={toggle} href="/studio" className={`link ${pathname === '/studio' ? 'active' : ''}`}>Studio</Link>
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
          <GoSignOut onClick={logouTheUser}/>
        </div>)}
      </div>

    </div>
  )
}

export default NavBar

