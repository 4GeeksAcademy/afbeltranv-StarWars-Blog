import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 StarWarsLogo"><img className="Logo" src="https://www.aaddpa.org/ckfinder/userfiles/files/starwars.png" /></span>
			</Link>
			<div className="ml-auto">				
				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle Favourites" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Dropdown button
					</button>
						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#">Action</a></li>
							<li><a className="dropdown-item" href="#">Another action</a></li>
							<li><a className="dropdown-item" href="#">Something else here</a></li>
						</ul>
				</div>
				
			</div>
		</nav>
	);
};