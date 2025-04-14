import React from 'react'
import Loader from '../components/Loader'
import { useState } from 'react'
import { Link } from 'react-router'

function Loginpage(){

    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        setIsLoading(true);

        // Simulate an API call
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }
  return (
    <div className='w-full'>
        <div className='flex flex-col items-center justify-center h-screen'>
            <p className='text-white font-bold text-2xl mb-3'>Welcome To C-Movies</p>
            <p className='text-gray-200 font-medium text-xl mb-3'>Get started</p>
            <div className='shadow-2xl py-5 px-5 w-[390px] rounded bg-gray-300'>
                <form 
                onSubmit={handleSubmit}
                className='flex flex-col gap-3'>
                    <label htmlFor ='email'>Email</label>
                    <input 
                    type='email' 
                    id='email' 
                    placeholder='johndoe@gmail.com' 
                    value={formData.email}
                    onChange= {(e) => setFormData({ ...formData, email: e.target.value })}
                    className='border-none, rounded-sm outline-none p-2 bg-white text-black'
                    />

                    <label htmlFor ='password'>Password</label>
                    <input 
                    type='password' 
                    id='password' 
                    placeholder='********' 
                    value={formData.password}
                    onChange= {(e) => setFormData({ ...formData, password: e.target.value })}
                    className='border-none, rounded-sm outline-none p-2 bg-white text-black'
                    />
                    <div className='flex justify-end items-center'>
                    <Link to='/forgotpassword' className='text-gray-500 font-medium justify-end'>Forgot password?</Link>
                    </div>
                    <button 
                    className='bg-blue-600 text-white font-bold py-2 rounded-sm mt-3 hover:cursor-pointer'>
                        { isLoading ? ( <Loader />)  : 'Log in' }
                    </button>
                </form>
            </div>
            <p className='text-gray-200 font-medium text-xl mt-3'>Dont have an account yet? <Link to='/signup' className='text-blue-600'>sign up</Link></p>
        </div>
    </div>
  )
}

export default Loginpage;