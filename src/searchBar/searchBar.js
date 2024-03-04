import {React,useState,useEffect} from 'react';
import './searchBar-module.css'



function SearchBar({setLocation,setCategoria,setFiltro}) {

const[ristorante,setRistorante] = useState('');
const[citta,setCitta] = useState('');
const[filtri,setFiltri] = useState('');



  const handleFormSubmit = (event) => {
    event.preventDefault();
    setLocation(citta);
    setCategoria(ristorante); 
    setFiltro(filtri)   
  };


  return (
        <form id='BarraRicerca' onSubmit={handleFormSubmit}>
        <div id="filtri">
        <button type="button" onClick={() => setFiltri("best_match")}>Best Match</button>
        <button type="button" onClick={() => setFiltri("rating")}>Highest Rated</button>
        <button type="button" onClick={() => setFiltri("review_count")}>Most Reviewed</button>
        </div>  

        <div id="campi">   
        <input type="text" placeholder="Search a restaurant"  onChange={(e) => setRistorante(e.target.value)}/>
        <input type="text" placeholder="Where?"  onChange={(e) => setCitta(e.target.value)}/>
        </div>
        <button type="submit" id='invia'>Search</button>
        </form>
  );
}

export default SearchBar;