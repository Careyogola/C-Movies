import React from 'react'

const SkeletonLoaderLogin = () => {
  return (
    <div className='flex flex-col items-center justify-center w-[390px] h-screen'>
        <div className='skeleton h-2.5 w-[140px]'></div>
        <div className='skeleton h-2.5 w-[140px]'></div>
        <div className='skeleton h-[40vh] w-full'></div>
        <div className='skeleton h-2.5 w-[140px]'></div>
        <div></div>
    </div>
  )
}

export default SkeletonLoaderLogin