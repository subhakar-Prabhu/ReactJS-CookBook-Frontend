import React, {Component} from 'react';
import './Redux.css';
import Footer from '../Footer/Footer'
import NavigationBar from "../NavigationBar/NavigationBar";
import FetchAPI from "../Redux/FetchAPI";
import { Provider } from 'react-redux';
import store, { COUNTER_DECREMENT, COUNTER_INCREMENT } from '../../store';

class Redux extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  increment = () => {
    store.dispatch({type: COUNTER_INCREMENT});
    console.log(store.getState());
  }

  decrement = () => {
    store.dispatch({type: COUNTER_DECREMENT});
    console.log(store.getState());
  }

  push = () => {
    store.dispatch({type: 'push', value: Math.random()});
    console.log(store.getState());
  }

  pop = () => {
    store.dispatch({type: 'pop'});
    console.log(store.getState());
  }

  render(){
    return(
      <Provider store={store}>
      <div>
        <NavigationBar />
        <FetchAPI/>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>

        <button onClick={this.push}>Push</button>
        <button onClick={this.pop}>Pop</button>

        <Footer />
      </div>
      </Provider>
    )
  }
}

export default Redux;