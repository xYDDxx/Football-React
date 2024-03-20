import React from 'react'

export default function Boxes ({ name, imgUri }) {
  return (
    <div className=''>
      <div className=''>
        <h1 className='text-white text-xl font-bold '>{name}</h1>
        <img
          class='border-solid border-black border-4 rounded-xl w-fit h-fit'
          src={imgUri}
          alt=''
        ></img>
      </div>
    </div>
  )
}
