import React from 'react'
import Logo from './atoms/Logo'
import HeaderButton from './atoms/HeaderButton'

export default function BlackHeader () {
  return (
    <div className='h-16 w-full bg-black'>
      <Logo />
      <HeaderButton></HeaderButton>
    </div>
  )
}
