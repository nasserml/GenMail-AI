'use client';
import { useSelectedElement } from '@/app/provider';
import React, { useEffect, useState } from 'react';
import InputField from './Settings/InputField';
import ColorPickerField from './Settings/ColorPickerField';
import InputStyleField from './Settings/InputStyleField';
import SliderField from './Settings/SliderField';
import TextAreaField from './Settings/TextAreaField';
import ToggleGroupField from './Settings/ToggleGroupField';
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  CaseLower,
  CaseSensitiveIcon,
  CaseUpper,
} from 'lucide-react';
import DropDownField from './Settings/DropDownField';
import ImagePreview from './Settings/ImagePreview';

const TextAlignOptions = [
  {
    value: 'left',
    icon: AlignLeft,
  },
  {
    value: 'center',
    icon: AlignCenter,
  },
  {
    value: 'right',
    icon: AlignRight,
  },
];

const TextTransformOptions = [
  {
    value: 'uppercase',
    icon: CaseUpper,
  },
  {
    value: 'lowercase',
    icon: CaseLower,
  },
  {
    value: 'capitalize',
    icon: CaseSensitiveIcon,
  },
];

function Settings() {
  const { selectedElement, setSelectedElement } = useSelectedElement();
  const [element, setElement] = useState();

  useEffect(() => {
    setElement(selectedElement?.layout?.[selectedElement?.index]);
  }, [selectedElement]);

  const onHandleInputChange = (fieldName, value) => {
    // Copy current selected Element
    const updateData = { ...selectedElement };

    // Update the specific field
    updateData.layout[selectedElement.index][fieldName] = value;

    // Update Original SelectedElement
    setSelectedElement(updateData);
  };

  const onHandleStyleChange = (fieldName, fieldValue) => {
    // Copy current selected Element
    /**
     * selectedELement: {
     * index:0,
     * [0]{
     * layout: {
     * ...layout,
     * style: {
     * ...style}
     * }}}
     */
    let updateElement = {
      ...selectedElement,
      layout: {
        ...selectedElement?.layout,
        [selectedElement?.index]: {
          ...selectedElement?.layout[selectedElement?.index],
          style: {
            ...selectedElement?.layout[selectedElement?.index].style,
            [fieldName]: fieldValue,
          },
        },
      },
    };
    // Update Original SelectedElement
    setSelectedElement(updateElement);
  };

  const onHandleOuterStyleChange = (fieldName, fieldValue) => {
    // Copy current selected Element
    /**
     * selectedELement: {
     * index:0,
     * [0]{
     * layout: {
     * ...layout,
     * style: {
     * ...style}
     * }}}
     */
    let updateElement = {
      ...selectedElement,
      layout: {
        ...selectedElement?.layout,
        [selectedElement?.index]: {
          ...selectedElement?.layout[selectedElement?.index],
          outerStyle: {
            ...selectedElement?.layout[selectedElement?.index].outerStyle,
            [fieldName]: fieldValue,
          },
        },
      },
    };
    // Update Original SelectedElement
    setSelectedElement(updateElement);
  };
  return (
    <div className="p-5 flex flex-col gap-4">
      <h2 className="font-bold text-xl">Settings</h2>
      {element?.content != undefined && (
        <InputField
          label={'Content'}
          value={element?.content}
          onHandleInputChange={(value) => onHandleInputChange('content', value)}
        />
      )}
      {element?.textarea != undefined && (
        <TextAreaField
          label={'Text Area'}
          value={element?.textarea}
          onHandleInputChange={(value) =>
            onHandleInputChange('textarea', value)
          }
        />
      )}
      {element?.imageUrl && (
        <ImagePreview
          value={element?.imageUrl}
          label={'Image Preview'}
          onHandleInputChange={(value) =>
            onHandleInputChange('imageUrl', value)
          }
        />
      )}
      {element?.url != undefined && (
        <InputField
          label={'Url'}
          value={element?.url}
          onHandleInputChange={(value) => onHandleInputChange('url', value)}
        />
      )}
      {element?.style?.width && (
        <SliderField
          label="Width"
          value={element?.style?.width}
          type="%"
          onHandleStyleChange={(value) => onHandleStyleChange('width', value)}
        />
      )}
      {element?.style?.textAlign && (
        <ToggleGroupField
          value={element?.style?.textAlign}
          options={TextAlignOptions}
          label="Text Align"
          onHandleStyleChange={(value) =>
            onHandleStyleChange('textAlign', value)
          }
        />
      )}
      {element?.style?.backgroundColor && (
        <ColorPickerField
          label="Background color"
          value={element?.style?.backgroundColor}
          onHandleStyleChange={(value) =>
            onHandleStyleChange('backgroundColor', value)
          }
        />
      )}
      {element?.style?.color && (
        <ColorPickerField
          label="Text color"
          value={element?.style?.color}
          onHandleStyleChange={(value) => onHandleStyleChange('color', value)}
        />
      )}
      {element?.style?.fontSize && (
        <InputStyleField
          label="Font Size"
          value={element?.style?.fontSize}
          onHandleStyleChange={(value) =>
            onHandleStyleChange('fontSize', value)
          }
        />
      )}
      {element?.style?.textTransform && (
        <ToggleGroupField
          value={element?.style?.textTransform}
          options={TextTransformOptions}
          label="Text Transform"
          onHandleStyleChange={(value) =>
            onHandleStyleChange('textTransform', value)
          }
        />
      )}
      {element?.style?.padding && (
        <InputStyleField
          label="Padding"
          value={element?.style?.padding}
          onHandleStyleChange={(value) => onHandleStyleChange('padding', value)}
        />
      )}
      {element?.style?.margin && (
        <InputStyleField
          label="Margin"
          value={element?.style?.margin}
          onHandleStyleChange={(value) => onHandleStyleChange('margin', value)}
        />
      )}
      {element?.style?.borderRadius && (
        <SliderField
          label="Border Radius"
          value={element?.style?.borderRadius}
          onHandleStyleChange={(value) =>
            onHandleStyleChange('borderRadius', value)
          }
        />
      )}
      {element?.style?.fontWeight && (
        <DropDownField
          value={element?.style?.fontWeight}
          label="Font Weight"
          options={[
            'normal',
            'bold',
            'bolder',
            'lighter',
            '100',
            '200',
            '300',
            '400',
            '500',
            '600',
            '700',
            '800',
            '900',
          ]}
          onHandleStyleChange={(value) =>
            onHandleStyleChange('fontWeight', value)
          }
        />
      )}

      <div>
        <h2 className='font-bold mb-2'>Outer Style</h2>
        {element?.outerStyle?.backgroundColor && (
          <ColorPickerField
            label="Background color"
            value={element?.outerStyle?.backgroundColor}
            onHandleStyleChange={(value) =>
              onHandleOuterStyleChange('backgroundColor', value)
            }
          />
        )}
        {element?.outerStyle?.justifyContent && (
          <ToggleGroupField
            label="Align"
            value={element?.outerStyle?.justifyContent}
            options={TextAlignOptions}
            onHandleStyleChange={(value) =>
              onHandleOuterStyleChange('justifyContent', value)
            }
          />
        )}
      </div>
    </div>
  );
}

export default Settings;
