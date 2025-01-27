import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

function ToggleGroupField({ label, value, options, onHandleStyleChange }) {
  return (
    <div>
      <label>{label}</label>
      <ToggleGroup
        type="single"
        defaultValue={value}
        onValueChange={(v)=>onHandleStyleChange(v)}
      >
        {options?.map((option, index) => (
          <ToggleGroupItem className="w-full" value={option?.value} key={index}>
            <option.icon />
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}

export default ToggleGroupField;
