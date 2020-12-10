import React from 'react';
import useInput  from './useInput';
import InputField from "./InputField";
import { Validators } from "./validateInput";
import { Form } from 'react-bootstrap';
import './ReactForm.css';

export default function NameForm(props) {
  const { value:firstName, bind:bindFirstName, reset:resetFirstName } = useInput('');
  const { value:lastName, bind:bindLastName, reset:resetLastName } = useInput('');
  const { value:emailID, bind:bindEmailID, reset:resetEmailID } = useInput('');

  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`Submitting Name ${firstName} ${lastName} ${emailID}`);
      resetFirstName();
      resetLastName();
      resetEmailID();
  }
  return (
      <Form className="textLabel" onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicFirstName">
      <Form.Label>First Name</Form.Label>
        <InputField
          type='text'
          {...bindFirstName}
          placeholder='Enter First Name'
          validators={[
            {check: Validators.required, message: 'This field is required'}
        ]}/>
      </Form.Group>

      <Form.Group controlId="formBasicLastName">
        <Form.Label>Last Name:</Form.Label>
        <InputField
          type='text'
          {...bindLastName}
          placeholder='Enter Last Name(Optional)'
        />
        </Form.Group>

        <Form.Group controlId="formBasicLastName">
        <Form.Label>Email ID:</Form.Label>
        <InputField
          type='text'
          {...bindEmailID}
          placeholder='Enter Email ID'
        />
        </Form.Group>

      <input type="submit" value="Submit" />
    </Form>
  );
}