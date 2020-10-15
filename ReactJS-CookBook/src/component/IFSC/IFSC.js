import React, { Component } from 'react';
import './IFSC.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';
import IFSCResults from './IFSCResults';

class IFSC extends Component{
  constructor(props) {
    super(props);
    this.state = {
      ifscCode: "",
      showResult: false,
      items: []
    };

    this.onChange = this.onChange.bind(this);
    this.closeIFSC = this.closeIFSC.bind(this);
    this.handleFind = this.handleFind.bind(this);
  }
  
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleFind(e) {
    e.preventDefault();
    let BaseUrl = "https://ifsc.razorpay.com/";
    var that = this;
    if(this.state.ifscCode === ''){
      alert('Please enter IFSC code')
      return;
    }
    fetch(BaseUrl + this.state.ifscCode)
      .then(response => {
        return response.json();
      })
      .then(function(data) {
        that.setState({ showResult: true });
        that.setState({ items: data });
      });
  }

  closeIFSC(e) {
    this.setState({ showResult: false });
  }
  
  render(){
    return(
      <div>
        <NavigationBar />
        <form>
          <div className="container">
            <br />
            <label>Find your bank Information:</label>
            <input
              type="text"
              className="form-control"
              name="ifscCode"
              aria-describedby="ifscHelp"
              placeholder="Enter your IFSC code"
              onChange={this.onChange}
            />
            <br />
            <button
              type="submit"
              onClick={this.handleFind}
              className="btn btn-primary"
            >
              Find
            </button>
            &nbsp; &nbsp; 
        <button onClick={this.closeIFSC} type="button" className="btn btn-primary">
        Clear
        </button>

          </div>
        </form>
        <IFSCResults IfscResults={this.state.items} />
        <Footer />
      </div>
    )
  }
}

export default IFSC;