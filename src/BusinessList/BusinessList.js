import React from "react";
import Business from "../Business/Business";
import "./BusinessList-module.css";

function BusinessList({lista}) {
    return(
        <div id="lista">
            {Object.keys(lista).map((business) => {
                return <Business key={business} informazioni={lista[business]}/>
            })
            }
        </div>
    )
}

export default BusinessList;