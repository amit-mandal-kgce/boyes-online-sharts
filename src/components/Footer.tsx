'use client'
import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io'

const Footer = () => {
  return (
    <footer className='mt-8 bg-cyan-900' style={{ backgroundImage: `url(footer.svg)` }}>
      <div className="grid md:grid-cols-2 gap-4 p-3 text-white">
        <div className="flex flex-col  md:flex-row justify-between items-center space-y-3 md:space-x-4">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r px-10 from-red-300 to-green-400"><p>IndMart</p></div>
            <div className="grid grid-cols-2 sm:grid-cols-3 space-y-5">
                <div className="flex flex-col space-y-2">
                    <h1 className='font-bold'>Product</h1>
                    <Link href='/'>Demo</Link>
                    <Link href='/'>Pricing</Link>
                    <Link href='/'>Roadmap</Link>
                    <Link href='/'>Security FAQ</Link>
                    <Link href='/'>Features</Link>
                </div>
                <div className="flex flex-col space-y-2">
                    <h1 className='font-bold'>Company</h1>
                    <Link href='/'>About Us</Link>
                    <Link href='/'>Careers</Link>
                    <Link href='/'>Press</Link>
                    <Link href='/'>Support</Link>
                </div>
                <div className="flex flex-col space-y-2">
                    <h1 className='font-bold'>Resource</h1>
                    <Link href='/'>Installotion Manual</Link>
                    <Link href='/'>Release Notes</Link>
                    <Link href='/'>Community Help</Link>
                </div>
            </div>
        </div>
        <div className="flex flex-col p-3 space-y-3">
            <div className="font-bold">Contact with us</div>
            <div className="flex space-x-3">
                <FaFacebook/>
                <FaTwitter/>
                <FaInstagram/>
                <IoLogoGithub/>
            </div>
            <div className="font-bold">Stay Up to date with passbolt</div>
            <div className="text-white">Elevate your style effortlessly with our curated collection of the latest trends. Discover fashion that speaks to you and technology that enhances your lifestyle. Your satisfaction is our top priority, and we&apos;re here to make every shopping experience a joyful one.</div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-x-2">
                <input type="text" placeholder='Enter your mail' className='px-2 outline-none'/>
                <div>
                    <Link href='/' className='px-3 py-1 border-2 border-white rounded-md'>Suscribe</Link>
                </div>
            </div>
        </div>
      </div>
      <h1 className="text-white text-center py-4">
            Created by <span className="text-accent">AMIT</span> | &copy; 2023
            All rights reserved.
          </h1>
    </footer>
  )
}

export default Footer
