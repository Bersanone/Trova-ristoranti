import './searchBar-module.css'

function SearchBar() {
  return (
        <form id='BarraRicerca'>
        <div id="filtri">
        <button type="button">Best Match</button>
        <button type="button">Highest Rated</button>
        <button type="button">Most Reviewed</button>
        </div>  

        <div id="campi">   
        <input type="text" placeholder="Search a restaurant" />
        <input type="text" placeholder="Where?" />
        </div>
        <button type="submit" id='invia'>Search</button>
        </form>
  );
}

export default SearchBar;