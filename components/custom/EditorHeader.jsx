'use client';
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { Code, Monitor, Smartphone } from 'lucide-react';
import { useScreenSize } from '@/app/provider';

function EditorHeader() {
  const { screenSize, setScreenSize } = useScreenSize();
  return (
    <div className="p-4 shadow-sm flex justify-between items-center">
      <Image
        src={'/logo.svg'}
        alt="logo"
        width={70}
        height={50}
        className="rounded-xl"
      />

      <div className="flex items-center gap-3">
        <Button
          variant={`${screenSize == 'desktop' ? null : 'ghost'}`}
          className={`${screenSize == 'desktop' && 'bg-purple-100 text-primary '}`}
          onClick={() => setScreenSize('desktop')}
        >
          <Monitor /> Desktop
        </Button>
        <Button
        onClick={() => setScreenSize('mobile')}
          variant={`${screenSize == 'mobile' ? null : 'ghost'}`}
          className={`${screenSize == 'mobile' && 'bg-purple-100 text-primary'}`}
        >
          <Smartphone /> Mobile
        </Button>
      </div>
      <div className="flex gap-3">
        <Button variant="ghost">
          <Code />
        </Button>
        <Button variant="outline">Send Test Email</Button>
        <Button>Save Template</Button>
      </div>
    </div>
  );
}

export default EditorHeader;
