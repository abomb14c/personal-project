import React, { Component } from 'react';
import './App.css';

import LeagueContainer from '../LeagueContainer/LeagueContainer'

class App extends Component {
  
  
  // showNbaData = async () => {
  //   try{
  //     const nbaCall = await fetchNbaData()
  //     const nbaData = await nbaCleaner(nbaCall)
  //       console.log(nbaData)
  //   }catch(error){

  //   }
  // }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <p className="App-intro">
          
        </p>
        <LeagueContainer />
    
      </div>
    );
  }
}

export default App;
