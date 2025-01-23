"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from '../ui/button';

function EmailTemplateList() {
    const [emailList, setEmailList] = useState([]);
  return (
    <div>
      <h2 className="font-bold text-xl text-primary mt-4">Workspace</h2>
      {emailList?.length == 0 && <div className='flex justify-center flex-col mt-7 items-center'>
        <Image src={'/email.png'} width={300} height={300} alt='email' />
        <Button className='mt-4'>+ CreateNew</Button>
        </div>}

    </div>
  );
}

export default EmailTemplateList;
