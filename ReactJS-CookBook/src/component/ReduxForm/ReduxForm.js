import React, {Component} from 'react';
import Form from './Form';
import Footer from '../Footer/Footer'
import { Provider } from 'react-redux';
import NavigationBar from "../NavigationBar/NavigationBar";
import store from '../../store';

class SimpleForm extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render(){
    return(
      <Provider store={store}>
      <div>
        <NavigationBar />
        <Form/>
        <Footer />
      </div>
      </Provider>
    )
  }
}

export default SimpleForm;