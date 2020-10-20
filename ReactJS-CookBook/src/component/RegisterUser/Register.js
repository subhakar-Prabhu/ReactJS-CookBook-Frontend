import React, {Component} from 'react';
import { Button, Form } from 'react-bootstrap';
import { Redirect } from "react-router-dom";
import './Register.css';
import axios from 'axios'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: false,
      userName:"",
      email:"",
      password:""
    };

    this.onLoginClick = this.onLoginClick.bind(this);
    this.onRegisterClick = this.onRegisterClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onLoginClick(e){
    e.preventDefault();
    this.setState({ islogin: true });
  }

  onRegisterClick(e){
    e.preventDefault();

    console.log('this.state', this.state);

    axios.post('https://react-cookbook-users.herokuapp.com/users/register', this.state)
    .then(response => {
      console.log('response', response);
    })
    .catch(error => {
      console.log('error', error);
    })
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render(){

    if (this.state.islogin) {
      return <Redirect to={"/"} />;
    }
    return(
      <div className="container">
      <div className="jumbotron jumboContainer">
      <Form className="textLabelActive">
        <Form.Group controlId="formBasicUserName">
          <Form.Label>Enter your Full Name (Required):</Form.Label>
          <Form.Control name="userName" placeholder="Enter Full Name" onChange={this.onChange}/>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter your Email ID (Required):</Form.Label>
          <Form.Control name="email" placeholder="Enter Email ID" onChange={this.onChange}/>
          <Form.Text>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control name="password" placeholder="Password" onChange={this.onChange}/>
        </Form.Group>

        <Button className="buttonWidth" variant="primary" type="submit" onClick={this.onRegisterClick}>
        Register
        </Button> &nbsp; &nbsp; &nbsp;

        <Button className="buttonWidth" variant="primary" type="submit" onClick={this.onLoginClick}>
        Login
        </Button>

      </Form>
      </div>
      </div>
    )
  }
}

export default Login;