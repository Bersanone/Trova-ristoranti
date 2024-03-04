import React from 'react';
import { useState } from 'react';
import './App.css';
import BusinessList from './BusinessList/BusinessList';
import SearchBar from './searchBar/searchBar';
import logo from "./Business/risorse/Eq_it-na_pizza-margherita_sep2005_sml.jpg";
import Yelp from './Utility/Yelp';



function App() {

  const [location,setLocation] = useState('');
  const [categoria,setCategoria] = useState('');
  const [filtro,setFiltro] = useState('');

  return (
    <div className="App">
        <SearchBar setLocation={setLocation} setCategoria={setCategoria} setFiltro={setFiltro}/>
        <div id='risultati'>
        <Yelp location={location} categoria={categoria} filtro={filtro}/>
        </div>
    </div>
  );
}

export default App;
