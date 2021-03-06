import React, {Component} from 'react';
import { Button, Form } from 'react-bootstrap';
import { Redirect } from "react-router-dom";
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      register: false,
      redirect: false,
      email:"",
      password:""
    };

    this.onLoginClick = this.onLoginClick.bind(this);
    this.onRegisterClick = this.onRegisterClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onLoginClick(e){
    e.preventDefault();
    this.setState({ redirect: true });
  }

  onRegisterClick(e){
    e.preventDefault();
    this.setState({ register: true });
  }

  onChange(e) {
    this.setState({ [e.target.type]: e.target.value });
  }

  render(){

    if (this.state.redirect) {
      return <Redirect to={"/home"} />;
    }

    if (this.state.register) {
      return <Redirect to={"/register"} />;
    }

    return(
      <div className="container">
      <div className="jumbotron jumboContainer">
      <Form className="textLabelActive">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter your Login details</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={this.onChange}/>
          <Form.Text>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" onChange={this.onChange}/>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button className="buttonWidth" variant="primary" type="submit" onClick={this.onLoginClick}>
        Login
        </Button> &nbsp; &nbsp; &nbsp;
        <Button className="buttonWidth" variant="primary" type="submit" onClick={this.onRegisterClick}>
        Register
        </Button>
      </Form>
      </div>
      </div>
    )
  }
}

export default Login;