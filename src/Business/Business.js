import './Business-module.css' 
 
 function Business({informazioni}){  
    return(
        <div id='risto'>
           <img src={informazioni.image_url} alt={informazioni.nome}/>
              <h1>{informazioni.name}</h1>
              <p>{informazioni.location.address1}</p>
              <p>{informazioni.location.city}</p>
              <p>{informazioni.location.zip_code}</p>
              <p>{informazioni.phone}</p>
              <div className="valutazioni">
                <p>{informazioni.categories.title}</p>
                <p>Valutazione: {informazioni.rating}</p>
                <p>Numero di recensioni: {informazioni.review_count}</p>
              </div>
        </div>
    )
}

export default Business;