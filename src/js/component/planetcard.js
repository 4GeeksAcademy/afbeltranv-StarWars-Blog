import React , {useEffect, useState, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Pcard=(props)=>{
    const {store, actions}=useContext(Context)
    console.log("Contexto desde planetas")
    return(
        <div className="card" style={{width: "18rem", display: "inline-block", margin:"10px"}}>
            <img src="https://www.aaddpa.org/ckfinder/userfiles/files/starwars.png" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">id:{props.id}</p>
                <Link to={"/double/"+props.id} className="btn btn-primary">More info!</Link>
                <button className="btn btn-secondary" onClick={()=>actions.addFav(props.name)}> Add to Fav's</button>
            </div>
        </div>
    )
}