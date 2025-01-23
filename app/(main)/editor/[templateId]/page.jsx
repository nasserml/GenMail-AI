import Canvas from '@/components/custom/Canvas';
import EditorHeader from '@/components/custom/EditorHeader';
import ElementsSideBar from '@/components/custom/ElementsSideBar';
import Settings from '@/components/custom/Settings';
import React from 'react';

function Editor() {
  return (
    <div>
      <EditorHeader />

      <div className="grid grid-cols-5">
        <ElementsSideBar />
        <div>
          <Canvas />
        </div>
        <Settings />
      </div>
    </div>
  );
}

export default Editor;
