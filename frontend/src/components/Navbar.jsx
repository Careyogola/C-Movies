import React from 'react'
import Button from '../components/Button.jsx'

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
        <div className='flex flex-row justify-between gap-4 mr-4'>
            <Button 
            text='Get started'
            onClick={handleClick}
            />

            <Button text='Login'
            onClick={handleClick}/>
        </div>

    </div>
  )
}

export default Navbar