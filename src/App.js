import React from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <React.Fragment>
    <div className="App">
      <h1 className="header-class">
     COUNTER APP USING REDUX
      </h1>
      <Counter/>
    
    </div>
    </React.Fragment>
  )
}

export default App;
