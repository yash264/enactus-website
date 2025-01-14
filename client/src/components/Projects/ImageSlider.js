import React from 'react'
import ImageList from './ImageList'

const ImageSlider = ({ name }) => {
    return (
        <div className='h-dvh overflow-hidden lg:w-72 md:w-56 p-1 border-8 border-l-2 rounded  bg-gradient-to-r from-slate-500 via-white to-slate-500'>
            <ImageList name={name} />
        </div>
    )
}

export default ImageSlider