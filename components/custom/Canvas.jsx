'use client';
import {
  useDragElementLayout,
  useEmailTemplate,
  useScreenSize,
} from '@/app/provider';
import React, { useEffect, useRef, useState } from 'react';
import ColumnLayout from '../LayoutElements/ColumnLayout';
import ViewHtmlDialog from './ViewHtmlDialog';

function Canvas({ viewHtmlCode , closeDialog}) {
  const { screenSize, setScreenSize } = useScreenSize();
  const { dragElementLayout, setDragElementLayout } = useDragElementLayout();
  const { emailTemplate, setEmailTemplate } = useEmailTemplate();
  const [dragOver, setDragOver] = useState(false);
  const htmlRef = useRef();
  const [htmlCode, setHtmlCode] = useState()

  const onDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const onDropHandle = () => {
    setDragOver(false);
    if (dragElementLayout?.dragLayout) {
      setEmailTemplate((prev) => [...prev, dragElementLayout?.dragLayout]);
    }
  };

  const getLayoutComponent = (layout) => {
    if (layout?.type == 'column') {
      return <ColumnLayout layout={layout} />;
    }
  };

  useEffect(()=>{
    viewHtmlCode && GetHTMlCode();
  },[viewHtmlCode])
  const GetHTMlCode = () => {
    if (htmlRef.current) {
      const htmlContent = htmlRef.current.innerHTML;
      setHtmlCode(htmlContent)
    }
  };
  return (
    <div className="mt-20 flex justify-center">
      <div
        className={`bg-white p-6 w-full  ${screenSize == 'desktop' ? 'max-w-2xl' : 'max-w-md'} ${dragOver && 'bg-purple-100 p-4'}`}
        onDragOver={onDragOver}
        onDrop={() => onDropHandle()}
        ref={htmlRef}
      >
        {emailTemplate?.length > 0 ? (
          emailTemplate?.map((layout, index) => (
            <div key={index}>{getLayoutComponent(layout)}</div>
          ))
        ) : (
          <h2 className="text-center p-4 bg-gray-100 border-dashed border">
            Add Layout here
          </h2>
        )}
      </div>
      <ViewHtmlDialog openDialog={viewHtmlCode} htmlCode={htmlCode} closeDialog={closeDialog}/>
    </div>
  );
}

export default Canvas;
