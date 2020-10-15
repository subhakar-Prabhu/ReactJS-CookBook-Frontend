import React, {Component} from 'react';
import './Home.css';
import Footer from '../Footer/Footer'
import NavigationBar from "../NavigationBar/NavigationBar";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    return(
      <div>
        <NavigationBar />
        Home
        <Footer />
      </div>
    )
  }
}

export default Home;