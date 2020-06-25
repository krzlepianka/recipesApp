import React from 'react';
import './App.css';
import Navigation from './components/navigation';
import ReceipeList from './components/receipeList';


function App() {
  return (
    <div className="App">
       <Navigation />
       <ReceipeList />
    </div>
  );
}

export default App;
