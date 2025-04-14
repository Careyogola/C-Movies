import React from 'react'
import Loader from '../components/Loader'
import { useState } from 'react'
import { Link } from 'react-router'

function Signuppage(){

    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate an API call
        setTimeout(() => {
            console.log(formData);
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
                onSubmit={handleChange}
                className='flex flex-col gap-3 w-[]'>
                    <label htmlFor ='name'>Name</label>
                    <input 
                    type='text' 
                    id='name' 
                    placeholder='John Doe' 
                    value={formData.name}
                    onChange={handleChange}
                    className='border-none, rounded-sm outline-none p-2 bg-white text-black'
                    />

                    <label htmlFor ='email'>Email</label>
                    <input 
                    type='email' 
                    id='email' 
                    placeholder='johndoe@gmail.com' 
                    value={formData.email}
                    onChange={handleChange}
                    className='border-none, rounded-sm outline-none p-2 bg-white text-black'
                    />

                    <label htmlFor ='password'>Password</label>
                    <input 
                    type='password' 
                    id='password' 
                    placeholder='********' 
                    value={formData.password}
                    onChange={handleChange}
                    className='border-none, rounded-sm outline-none p-2 bg-white text-black'
                    />
                    <div className='flex justify-end items-center'>
                    <Link to='/forgotpassword' className='text-gray-500 font-medium justify-end'>Forgot password?</Link>
                    </div>
                    <button 
                    onClick={handleSubmit}
                    className='bg-blue-600 text-white font-bold py-2 rounded-sm mt-3 hover:cursor-pointer'>
                        { isLoading ? ( <Loader />)  : 'Get started' }
                    </button>
                </form>
            </div>
            <p className='text-gray-200 font-medium text-xl mt-3'>Already have an account? <Link to='/login' className='text-blue-600'>Login</Link></p>
        </div>
    </div>
  )
}

export default Signuppage;