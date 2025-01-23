import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

function Hero() {
  return (
    <div className='px-10 md:px-28 lg:px-44 xl:px-56 flex flex-col items-center mt-24'>
      <h2 className='font-extrabold text-5xl text-center'>
        AI-Powered <span className='text-primary'>Email Templates</span>
      </h2>
      <p className='text-center mt-4'>Impress your audience with our AI-powered email templates and save time. Get started today! and see how it works for yourself Ai Powered Generated Email Templates with our AI-powered email templates and save time. Get started today!</p>

      <div className='flex gap-5 mt-6'>
        <Button variant="outline">Try Demo</Button>
        <Button>Get Started</Button>
      </div>
      <Image src={"/landing.avif"} width={1000} height={800} alt='landing' className='mt-12 rounded-xl w-1/2' />
    </div>
  )
}

export default Hero