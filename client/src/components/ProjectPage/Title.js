import React from 'react'

const Title = ({ title }) => {
  return (
    <div className='p-6 bg-yellow-300 top-0'  style={{ boxShadow: '0px 4px 9px rgba(0, 0, 0, 0.3)' }}>
      <h1 className='lg:text-5xl md:text-3xl font-mono font-semibold' >
        PROJECT {title.toUpperCase()}
      </h1>
    </div>
  )
}

export default Title
