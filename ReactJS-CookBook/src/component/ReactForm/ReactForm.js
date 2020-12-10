import React from 'react';
import useInput  from './useInput';
import InputField from "./InputField";
import { Validators } from "./validateInput";

export default function NameForm(props) {
  const { value:firstName, bind:bindFirstName, reset:resetFirstName } = useInput('');
  const { value:lastName, bind:bindLastName, reset:resetLastName } = useInput('');
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`Submitting Name ${firstName} ${lastName}`);
      resetFirstName();
      resetLastName();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        {/* <input type="text" {...bindFirstName} /> */}
        <InputField
                    
                    type='text'
                    {...bindFirstName}
                    placeholder='Enter text here...'
                    validators={[
                        {check: Validators.required, message: 'This field is required'}
                    ]}
                    />
      </label>
      <label>
        Last Name:
        {/* <input type="text" {...bindLastName} /> */}
        <InputField
                    
                    type='text'
                    {...bindLastName}
                    placeholder='Enter text here...'
                    // validators={[
                    //     {check: Validators.required, message: 'This field is required'}
                    // ]}
                    />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}