import React from 'react';
import { useState } from 'react';
import './App.css';
import BusinessList from './BusinessList/BusinessList';
import SearchBar from './searchBar/searchBar';


function App() {

  return (
    <div className="App">
        <SearchBar />
        <BusinessList  />
    </div>
  );
}

export default App;
