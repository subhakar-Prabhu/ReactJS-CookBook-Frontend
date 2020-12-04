import React from 'react';

const CustomInput = ({
  placeholder = 'Please Enter Input',
  input,
  meta,
  name
}) => {
  return (
    <input name={name} onChange={input.onChange} value={input.value} type='text' placeholder={placeholder} />
  )
}

export default CustomInput;