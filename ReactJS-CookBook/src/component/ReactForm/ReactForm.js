import React, { useState } from 'react';
import InputField from "./InputField.js";

const ReactForm = () => {

  const [text, getText] = useState('');

  const handleChange = (key) => (value) => {
    console.log('key', key);
    console.log('value', value);

    // this.setState({[key]: value});
  };

  return (
    <div className='form-content-right'>
      <form className='form' noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>

        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <InputField
                    value={text}
                    type='text'
                    name='username'
                    placeholder='Enter text here...'
                    onChange={handleChange('text')}/>
          {/* <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          /> */}
          {/* {errors.username && <p>{errors.username}</p>} */}
        </div>

        {/* <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div> */}

        {/* <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div> */}

        {/* <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div> */}

        {/* <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href='http://www.google.com'>here</a>
        </span> */}
      </form>
    </div>
  );
};

export default ReactForm;
