import React from "react";
import "./menuhome.css"

export const MenuHome = () =>  {
    return (
        <div className="menuHome"> 
        <h4>Categories</h4>
            <ul>
                <button className="all">All</button>
                <button>Products</button>
                <button>Experiences</button>
            </ul>
        </div>
    )
}