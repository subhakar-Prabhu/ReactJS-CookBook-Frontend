import React, {Component} from 'react';
import axios from 'axios'
import { connect } from 'react-redux';

class FetchAPI extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  getData = () => {
    if(this.props.data.length === 0){
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(result => {
        console.log('Data Fetched');
        this.props.setData(result.data);
      })
    }
  }

  render(){
    return(
      <div>
        <button onClick={this.getData}>Get Data</button>
        <button onClick={this.props.removeData}>Remove Data</button>
        {this.props.data.map((x,i) => <div key={i}> {x.title} </div>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.storage.data || []
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setData: (data) => {
      dispatch({type: 'setData', data});
    },
    removeData: () => {
      dispatch({type: 'removeData'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchAPI);