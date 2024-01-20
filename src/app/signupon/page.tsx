'use client'
import Link from "next/link"
import React, { useEffect } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

export default function SignUpPage(){
    const router = useRouter();

    const [user, setUser] = React.useState({
        username: '',
        email: '',
        password: '',
    })
    // console.log('User :>>', user)

    const [buttonDisable, setButtonDisable] = React.useState(false)
    const [loading, setLoding] = React.useState(false)
    
    // sign up.................................
    const onSignUp = async () => {
        try {
            setLoding(true)
            const response = await axios.post('/api/users/signup', user);
            console.log('Signup Okey', response.data)
            router.push('/login')
        } catch (error: any) {
            console.log('Failed to sign up user', error.message)
        }finally{
            setLoding(false)
        }
    }
    // ..................... button disable...............
    useEffect(()=> {
        if(
            user.username.length > 0 &&
            user.email.length > 0 &&
            user.password.length > 0 
        ){
            setButtonDisable(false)
        }else{
            setButtonDisable(true)
        }
    }, [user])
    return (
    <main className="flex justify-center items-center h-screen mt-[-4px]" style={{backgroundImage: `url(login.svg)`}}>
        <div className="flex flex-col justify-center items-center">
            <h1 className="mb-1 text-white text-lg md:text-3xl font-bold">Welcome</h1>
            <h3 className="text-xs text-white md:text-base mb-10 font-light">{loading ? 'Processing...' : 'Sign up now to get started'}</h3>
            
            <div className="w-full">
            <label htmlFor="name" className="text-sm text-white md:text-base">Full Name</label>
            <input className="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-xs lg:text-sm rounded-lg focus:ring-blue-400 block w-full p-1.5 lg:p-2.5 "
            placeholder="Enter username..."
            id="username"
            type="name"
            value={user.username}
            onChange={(e)=> setUser({...user, username: e.target.value})}
            /></div>

            <div className="w-full">
            <label htmlFor="email" className="text-sm text-white md:text-base">Email</label>
            <input className="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-xs lg:text-sm rounded-lg focus:ring-blue-400 block w-full p-1.5 lg:p-2.5 "
            placeholder="Enter email..."
            id="email"
            type="email"
            value={user.email}
            onChange={(e)=> setUser({...user, email: e.target.value})}
            /></div>

            <div className="w-full">
            <label htmlFor="password" className="text-sm text-white md:text-base">Password</label>
            <input className="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-xs lg:text-sm rounded-lg focus:ring-blue-400 block w-full p-1.5 lg:p-2.5 "
            placeholder="Enter password..."
            id="password"
            type="password"
            value={user.password}
            onChange={(e)=> setUser({...user, password: e.target.value})}
            /></div>
            <button onClick={onSignUp} className="bg-yellow-400 text-white rounded-md mb-2 text-xs md:text-base px-4 py-1 uppercase">{buttonDisable ? 'Sign up' : 'Register My Account Now'}</button>
            <div className="flex flex-row">
                <div className="text-xs text-white md:text-base">Alredy have an account?</div>
                <Link href="/login" className="text-blue-500 text-xs md:text-base underline cursor-pointer">Sign in</Link>
            </div>

        </div>
    </main>
)}
