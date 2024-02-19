import React from "react";
import logo from "../Business/risorse/Eq_it-na_pizza-margherita_sep2005_sml.jpg";
import Business from "../Business/Business";

function BusinessList() {
    const ristoranti =[{
        immagine: logo,
        nome: "Nome ristorante",
        indirizzo: "Indirizzo",
        citta: "città",
        cap: "cap",
        categoria: "categoria",
        valutazione: "valutazione",
        numeroRecensioni: "numero recensioni",
        id: 0,
    },
    {
        immagine: logo,
        nome: "Nome ristorante",
        indirizzo: "Indirizzo",
        citta: "città",
        cap: "cap",
        categoria: "categoria",
        valutazione: "valutazione",
        numeroRecensioni: "numero recensioni",
        id: 1,
    },
    {
        immagine: logo,
        nome: "Nome ristorante",
        indirizzo: "Indirizzo",
        citta: "città",
        cap: "cap",
        categoria: "categoria",
        valutazione: "valutazione",
        numeroRecensioni: "numero recensioni",
        id: 2,
    },
    {
        immagine: logo,
        nome: "Nome ristorante",
        indirizzo: "Indirizzo",
        citta: "città",
        cap: "cap",
        categoria: "categoria",
        valutazione: "valutazione",
        numeroRecensioni: "numero recensioni",
        id: 3,
    },
    {
        immagine: logo,
        nome: "Nome ristorante",
        indirizzo: "Indirizzo",
        citta: "città",
        cap: "cap",
        categoria: "categoria",
        valutazione: "valutazione",
        numeroRecensioni: "numero recensioni",
        id: 4,
    }
]
    return(
        <div>
            {
                ristoranti.map(ristorante => {
                    return <Business informazioni={ristorante} key={ristorante.id}/>
                })
            }
        </div>
    )
}

export default BusinessList;