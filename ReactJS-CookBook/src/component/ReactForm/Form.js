import React from 'react';
import ReactForm from './ReactForm';
import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from '../Footer/Footer'

const Form = () => {
  return (
    <>
      <NavigationBar />
      <div className='form-container'>
        <div className='form-content-left'>
        </div>
          <ReactForm/>
      </div>
      <Footer />
    </>
  );
};

export default Form;
