import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {
  state={
    advice:''
  };
  componentDidMount (){
    this.fetchAdvice();
  }
  fetchAdvice=()=>{
    axios.get('https://api.adviceslip.com/advice')
    .then((response)=>{
      const{ advice}= response.data.slip
      this.setState({ advice:advice});
    })
    .catch((error)=>{
      console.log(error);
    });
  }
  render(){
   return (
  <div className="app">
    <div className='card'>
      <h2 className='heading'>{this.state.advice}</h2>
      <button onClick={this.fetchAdvice} className='button'>
        <span>Give me advice</span>
      </button>
    </div>
   </div>
  );
}
}
export default App;
