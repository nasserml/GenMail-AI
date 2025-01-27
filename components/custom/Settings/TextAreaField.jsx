import { Textarea } from '@/components/ui/textarea';
import React from 'react';

function TextAreaField({ label, value, onHandleInputChange }) {
  console.log(value);
  return (
    <div>
      <label>{label}</label>
      <Textarea
        value={value}
        onChange={(e) => onHandleInputChange(e.target.value)}
      />
    </div>
  );
}

export default TextAreaField;
