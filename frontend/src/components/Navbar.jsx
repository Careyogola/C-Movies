import React from 'react'
import Button from '../components/Button.jsx'
import { Link } from 'react-router'
import { GoChevronDown } from "react-icons/go";


const Navbar = () => {

    function handleClick() {
        console.log('Get started button clicked');
        // Add your logic here, e.g., navigate to a different page or show a modal
    }
  return (
    <div className='w-full h-14 items-center flex flex-row justify-between bg-black bg-opacity-50'>
        <img 
        src='/netflixlogo.png'
        alt='Netflix Logo'
        className='h-10 w-28 ml-4 '
        />
        <div className='flex flex-row items-center gap-3'>
          <Link to='/'>
          <p className='flex flex-row items-center gap-1'>
            products <GoChevronDown />
          </p>
          </Link>

        </div>
        <div className=' mr-4'>
            <Button 
            text='Get started'
            onClick={handleClick}
            />

        </div>

    </div>
  )
}

export default Navbar