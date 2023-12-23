'use client'
import React, {useEffect} from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LoginPage(){

    const router = useRouter()

    const [user, setUser] = React.useState({
        email: '',
        password: "",
    })
    const [buttonDisable, setButtonDisable] = React.useState(false)
    const [loading, setLoding] = React.useState(false)
    // login.........................
    const onLogin = async () => {
        try {
            setLoding(true);
            const response = await axios.post('/api/users/login', user)
            console.log('Login Successfully', response.data)
            router.push('/profile')
        } catch (error: any) {
            console.log('Login Failed', error.message)
        }finally{
            setLoding(false)
        }
    }

    useEffect(()=>{
        if(user.email.length > 0 && user.password.length > 0){
            setButtonDisable(false)
        }else{
            setButtonDisable(true)
        }
    }, [user])

    return (
    <main className="flex justify-center items-center h-screen mt-[-4px]" style={{backgroundImage: `url(login.svg)`}}>
        <div className="flex flex-col justify-center items-center">
            <h1 className="mb-1 text-white text-lg md:text-3xl font-bold">Welcome Back</h1>
            <h3 className="text-xs text-white md:text-base mb-10 font-light">{loading ? 'Processing...' : 'Sign in to get explored'}</h3>

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
            <button onClick={onLogin} className="bg-yellow-400 text-white rounded-md mb-2 text-xs md:text-base px-4 py-1 uppercase">sign in</button>
            <div className="flex flex-row">
                <div className="text-xs md:text-base text-white">Didn&apos;t have an account?</div>
                <Link href="/" className="text-blue-500 text-xs md:text-base underline cursor-pointer">Sign up</Link>
            </div>

        </div>
    </main>
    
    )
}