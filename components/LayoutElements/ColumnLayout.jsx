'use client';
import {
  useDragElementLayout,
  useEmailTemplate,
  useSelectedElement,
} from '@/app/provider';
import React, { useState } from 'react';
import ButtonComponent from '../custom/Element/ButtonComponent';
import TextComponent from '../custom/Element/TextComponent';
import ImageComponent from '../custom/Element/ImageComponent';
import LogoComponent from '../custom/Element/LogoComponent';
import DividerComponent from '../custom/Element/DividerComponent';
import LogoHeaderComponent from '../custom/Element/LogoHeaderComponent';
import SocialIconsComponent from '../custom/Element/SocialIconsComponent';
import { ArrowDown, ArrowUp, Trash } from 'lucide-react';

function ColumnLayout({ layout }) {
  const [dragOver, setDragOver] = useState();
  const { emailTemplate, setEmailTemplate } = useEmailTemplate();
  const { dragElementLayout, setDragElementLayout } = useDragElementLayout();
  const { selectedElement, setSelectedElement } = useSelectedElement();

  const onDragOverHandle = (event, index) => {
    event.preventDefault();
    setDragOver({
      index: index,
      columnId: layout?.id,
    });
  };

  const onDropHandle = () => {
    const index = dragOver?.index;

    setEmailTemplate((prevItem) =>
      prevItem?.map((col) =>
        col.id == layout?.id
          ? { ...col, [index]: dragElementLayout?.dragElement }
          : col
      )
    );
    setDragOver(null);
  };
  const GetElementComponent = (element) => {
    if (element?.type == 'Button') {
      return <ButtonComponent {...element} />;
    } else if (element?.type == 'Text') {
      return <TextComponent {...element} />;
    } else if (element?.type == 'Image') {
      return <ImageComponent {...element} />;
    } else if (element?.type == 'Logo') {
      return <LogoComponent {...element} />;
    } else if (element?.type == 'Divider') {
      return <DividerComponent {...element} />;
    } else if (element?.type == 'LogoHeader') {
      return <LogoHeaderComponent {...element} />;
    } else if (element?.type == 'SocialIcons') {
      return <SocialIconsComponent {...element} />;
    }

    return element?.type;
  };

  const deleteLayout = (layoutId) => {
    const updateEmailTemplate = emailTemplate?.filter(
      (item) => item?.id != layoutId
    );
    setEmailTemplate(updateEmailTemplate);
    setSelectedElement(null);
  };
  const moveItemUp = (layoutId) => {
    const index = emailTemplate?.findIndex((item) => item?.id == layoutId);

    if (index > 0) {
      const updateEmailTemplate = [...emailTemplate];
      const item = updateEmailTemplate[index];
      updateEmailTemplate[index] = updateEmailTemplate[index - 1];
      updateEmailTemplate[index - 1] = item;
      setEmailTemplate(updateEmailTemplate);
    }

  }

  const moveItemDown = (layoutId) => {
    const index = emailTemplate?.findIndex((item) => item?.id == layoutId);

    if (index < emailTemplate?.length - 1) {
      const updateEmailTemplate = [...emailTemplate];
      const item = updateEmailTemplate[index];
      updateEmailTemplate[index] = updateEmailTemplate[index + 1];
      updateEmailTemplate[index + 1] = item;
      setEmailTemplate(updateEmailTemplate);    
    }

  }
  return (
    <div className="relative">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${layout?.numOfCol}, 1fr)`,
          gap: '0px',
        }}
        className={`${selectedElement?.layout?.id == layout?.id && ' border-blue-500 border-dashed border'}`}
      >
        {Array.from({ length: layout?.numOfCol }).map((_, index) => (
          <div
            key={index}
            className={`p-0 flex items-center justify-center cursor-pointer ${!layout?.[index]?.type && ' border border-dashed '} ${index == dragOver?.index && dragOver?.columnId && 'bg-green-100'}
            ${selectedElement?.layout?.id == layout?.id && selectedElement?.index == index && ' border-blue-500 border-4'}`}
            onDragOver={(event) => onDragOverHandle(event, index)}
            onDrop={onDropHandle}
            onDragLeave={() => setDragOver(null)}
            onClick={() => setSelectedElement({ layout: layout, index: index })}
          >
            {GetElementComponent(layout?.[index]) ?? 'Drag Element Here'}
          </div>
        ))}

        {selectedElement?.layout?.id == layout?.id && (
          <div className="absolute -right-10 flex gap-2 flex-col">
            <div
              className="cursor-pointer bg-purple-100 p-2 rounded-full hover:scale-105 transition-all hover:shadow-md duration-300 ease-in-out"
              onClick={() => deleteLayout(layout?.id)}
            >
              <Trash className="w-4 h-4 text-red-500" />
            </div>

            <div
              className="cursor-pointer bg-purple-100 p-2 rounded-full hover:scale-105 transition-all hover:shadow-md duration-300 ease-in-out"
              onClick={() => moveItemUp(layout?.id)}
            >
              <ArrowUp className="w-4 h-4 " />
            </div>

            <div
              className="cursor-pointer bg-purple-100 p-2 rounded-full hover:scale-105 transition-all hover:shadow-md duration-300 ease-in-out"
              onClick={() => moveItemDown(layout?.id)}
            >
              <ArrowDown className="w-4 h-4 " />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ColumnLayout;
