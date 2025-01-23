import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { Code, Monitor, Smartphone } from 'lucide-react'

function EditorHeader() {
  return (
    <div className='p-4 shadow-sm flex justify-between items-center'>
        <Image src={'/logo.svg'} alt='logo' width={70} height={50} className='rounded-xl' />

        <div className='flex items-center'>
            <Button variant="ghost"><Monitor/> Desktop</Button>
            <Button variant="ghost"><Smartphone/> Mobile</Button>
        </div>
        <div className='flex gap-3'>
            <Button variant="ghost"><Code/></Button>
            <Button variant="outline">Send Test Email</Button>
            <Button>Save Template</Button>
        </div>

    </div>
  )
}

export default EditorHeader