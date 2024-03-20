import React from 'react'
import Logo from './atoms/Logo'
import HeaderButton from './atoms/HeaderButton'

export default function BlackHeader () {
  return (
    <div className='h-16 w-full bg-black flex '>
      <div className='w-2/4'>
        <Logo />
      </div>
      <div className='flex justify-between items-center w-2/4 pr-8 font-bold'>
        <HeaderButton name='Aktuell'></HeaderButton>
        <HeaderButton name='Spiele'></HeaderButton>
        <HeaderButton name='Tabelle'></HeaderButton>
        <HeaderButton name='Statistiken'></HeaderButton>
        <HeaderButton name='Spieler'></HeaderButton>
        <HeaderButton name='Impressum'></HeaderButton>
      </div>
    </div>
  )
}
