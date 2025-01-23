import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

function Header() {
  return (
    <div className='flex items-center justify-between p-4 shadow-sm px-10'>
      <Image src={"/logo.svg"} alt='logo' width={70} height={50} className='rounded-xl'/>
      <div>
        <Button>Get Started</Button>
      </div>
    </div>
  )
}

export default Header