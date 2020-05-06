import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {
  state={
    advice:'',
    isLoading:false,
    error:false
  };
  componentDidMount (){
    this.fetchAdvice();
  }
  fetchAdvice=()=>{
    this.setState({isLoading:true})
    axios.get('https://api.adviceslip.com/advice')
    .then((response)=>{
      const{ advice}= response.data.slip
      this.setState({ advice:advice, isLoading:false});

    })
    .catch((error)=>{
      this.setState({ advice:null, isLoading:false, error:true});
    });
  }
  render(){
   return (
     
   
  <div className="app">
  {this.state.error ? (<h1 style={{color:'red', fontSize:'7rem'}}>Something went wrong</h1>) :
   (<div className='card'>
      {this.state.isLoading ? (<p>Loading...</p>):
      (<>
      <h2 className='heading'>{this.state.advice}</h2>
      <button onClick={this.fetchAdvice} className='button'>
        <span>Give me advice</span>
       
      </button> </>)}
    </div>)}
   </div>
   
  );
}
}
export default App;
