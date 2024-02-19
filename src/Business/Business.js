import './Business-module.css' 
 
 function Business({informazioni}){  
    return(
        <div id='risto'>
           <img src={informazioni.immagine} alt={informazioni.nome}/>
              <h1>{informazioni.nome}</h1>
              <p>{informazioni.indirizzo}</p>
              <p>{informazioni.citta}</p>
              <p>{informazioni.cap}</p>
              <div className="valutazioni">
                <p>{informazioni.categoria}</p>
                <p>{informazioni.valutazione}</p>
                <p>{informazioni.numeroRecensioni}</p>
              </div>
        </div>
    )
}

export default Business;