'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useConvex } from 'convex/react';
import { useUserDetail } from '@/app/provider';
import { api } from '@/convex/_generated/api';

function EmailTemplateList() {
  const [emailList, setEmailList] = useState([]);
  const convex = useConvex();
  const { userDetail, setUserDetail } = useUserDetail();

  useEffect(()=>{
    userDetail && GetTemplateList();
  } ,[userDetail])

  const GetTemplateList = async () => {
    const result = await convex.query(api.emailTemplate.GetAllUserTemplate, {
      email: userDetail?.email
    })
    console.log(result);
    setEmailList(result);
  }




  return (
    <div>
      <h2 className="font-bold text-xl text-primary mt-4">Workspace</h2>
      {emailList?.length == 0 ? (
        <div className="flex justify-center flex-col mt-7 items-center">
          <Image src={'/email.png'} width={300} height={300} alt="email" />
          <Link href={'/dashboard/create'}>
            <Button className="mt-4">+ CreateNew</Button>
          </Link>
        </div> 
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6 '>
          {emailList?.map((item, index)=> (
            <div key={index} className='p-5 rounded-lg shadow-md  border flex flex-col items-center justify-center'>
              <Image src={'/emailbox.png'} width={300} height={300} alt="email" className='w-3/4' />
              <div>
                <h2 className='mt-2'>{item?.description}</h2>
                <Link href={"/editor/" + item?.tid}><Button className="mt-2 w-full">View/Edit</Button></Link>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EmailTemplateList;
