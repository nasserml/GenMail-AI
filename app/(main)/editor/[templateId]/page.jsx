"use client";
import Canvas from '@/components/custom/Canvas';
import EditorHeader from '@/components/custom/EditorHeader';
import ElementsSideBar from '@/components/custom/ElementsSideBar';
import Settings from '@/components/custom/Settings';
import React, { useState } from 'react';

function Editor() {
  const [viewHtmlCode, setViewHtmlCode] = useState();
  return (
    <div>
      <EditorHeader viewHtmlCode={(v)=> setViewHtmlCode(v)} />

      <div className="grid grid-cols-5">
        <ElementsSideBar />
        <div className='col-span-3 bg-gray-200'>
          <Canvas viewHtmlCode={viewHtmlCode}  closeDialog={() => setViewHtmlCode(false)}/>
        </div>
        <Settings />
      </div>
    </div>
  );
}

export default Editor;
