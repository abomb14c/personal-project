import React, { Component } from 'react';
import './App.css';
import fetchNbaData from '../../apiCalls/apiCalls'
import nbaCleaner from './../helpers/dataCleaner'

class App extends Component {
  
  
  showNbaData = async () => {
    try{
   const nbaCall = await fetchNbaData()
   const nbaData = await nbaCleaner(nbaCall)
    console.log(nbaData)
    }catch(error){
      
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
    
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.showNbaData}>NBA</button>
      </div>
    );
  }
}

export default App;
