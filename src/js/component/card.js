import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

export const Card=(props)=>{
    return(
        <div className="card" style={{width: "18rem", display: "inline-block", margin:"10px"}}>
            <img src="https://www.aaddpa.org/ckfinder/userfiles/files/starwars.png" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">AAA.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}