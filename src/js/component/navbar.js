import React , {useEffect, useState, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {

	const {store, actions}=useContext(Context)
	console.log("Contexto desde navbar")
	
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 StarWarsLogo"><img className="Logo" src="https://www.aaddpa.org/ckfinder/userfiles/files/starwars.png" /></span>
			</Link>
			<div className="ml-auto">				
				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle Favourites" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favs {store.favs.length}
					</button>
						<ul className="dropdown-menu">
							{store.favs.map((fav)=><li><a className="dropdown-item" href="#" key={fav}> {fav} </a> <button onClick={()=>actions.removeFav(fav)}> Delete </button></li>)}
							
						</ul>
				</div>
				
			</div>
		</nav>
	);
};