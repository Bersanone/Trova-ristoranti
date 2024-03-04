import {React,useEffect,useState} from "react";
import BusinessList from "../BusinessList/BusinessList";

function Yelp({location,categoria,filtro}) {
const API_KEY = 'UPbIrMGn2gqa6Niz7wqrXSTf6VUrXjfaRyAfchPY6CQoWH-lAaCcDzejlLhpvncJShF1Pzq8LkHVY8mHbCjCdRVxhk11G4IZJHT0MZPFowcSO_MgdE2AoWvtGPHhZXYx';

const [dati, setDati] = useState([]);
const [isLoading, setIsLoading] = useState(true);


useEffect(()=>{
    const fetchData = async () => {
        if(location === '' || categoria === ''){
            return;
        }
        try{
            const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${location}&categories=${categoria}&sort_by=${filtro}&limit=20`,{
                headers: {
                    'Authorization': `Bearer ${API_KEY}`,
                    'Accept': 'application/json',
                }
            });

            //controlla se la richiesta è andata a buon fine
            if(!response.ok){
                throw new Error('Qualcosa è andato storto');
            }

            const data = await response.json();
            setIsLoading(false);
            setDati(data.businesses)

         
        }
        //Se la richiesta non va a buon fine, mostra un alert
        catch(error){
            alert('Qualcosa è andato storto, ricontrolla i campi di ricerca e riprova');
        }
    };
    fetchData();
},[location,categoria,filtro]);

if(isLoading){
    return <h1>Cerca una location e una categoria</h1>
}
return ( 
    <div>
        <BusinessList lista={dati}/>
    </div>
);

};

export default Yelp;