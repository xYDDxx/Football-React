import React from 'react'
import BlackHeader from '../components/molecules/BlackHeader'
import Boxes from '../components/molecules/Boxes'

export default function Mainsite () {
  return (
    <div className=''>
      <BlackHeader></BlackHeader>
      <div className=' w-full h-dvh bg-zinc-900 grid grid-rows-2 grid-flow-col gap-4 pl-24 pt-12'>
        <Boxes
          name='Verfügbare Ligen'
          imgUri='C:\HTL Dornbirn\4. Klasse\SWP\football-react\src\images\bundesligen.jpg'
        ></Boxes>
        <Boxes
          name='Bundesliga News'
          imgUri='football-react\src\images\spiel-einteilungen.png'
        ></Boxes>
        <Boxes
          name='Spiel-Einteilungen'
          imgUri='football-react\src\images\bundesliga news.jpg'
        ></Boxes>
        <Boxes
          name='Bundesliga Tabelle'
          imgUri='football-react\src\images\bundesliga-tabelle.jpg'
        ></Boxes>
      </div>
    </div>
  )
}
