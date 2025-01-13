import React from 'react'


const ImageCard = ({source}) => {
  return (
    <div className='overflow-hidden p-1 pb-0 lg:h-48 md:h-24 border-2 rounded-md bg-gray-200'>
        <img className='object-scale-down w-full h-full' src={source} alt=''/>
    </div>
  )
}

export default ImageCard