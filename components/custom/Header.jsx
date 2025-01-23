'use client';
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import SignInButton from './SignInButton';
import { useUserDetail } from '@/app/provider';
import Link from 'next/link';

function Header() {
  const { userDetail, setUserDetail } = useUserDetail();
  return (
    <div className="flex items-center justify-between p-4 shadow-sm px-10">
      <Image
        src={'/logo.svg'}
        alt="logo"
        width={70}
        height={50}
        className="rounded-xl"
      />
      <div>
        {userDetail?.email ? (
          <div className="flex gap-3 items-center">
            <Link href={'/dashboard'}>
              <Button>Dashboard</Button>
            </Link>

            <Image
              src={userDetail?.picture}
              alt="profile"
              width={35}
              height={35}
              className="rounded-full"
            />
          </div>
        ) : (
          <SignInButton />
        )}
      </div>
    </div>
  );
}

export default Header;
