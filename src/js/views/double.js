import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Double = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();


	const [planet, setPlanet]=useState({}); 
	const [planetId, setPlanetId]=useState({}); 


	function getPlanet(){
		fetch('https://www.swapi.tech/api/planets/'+params.theid)
		.then((response)=>response.json())
		// .then((data)=>console.log(data.result))
		.then((data)=>setPlanet(data.result.properties));
	}
	function getPlanetid(){
		fetch('https://www.swapi.tech/api/planets/'+params.theid)
		.then((response)=>response.json())
		// .then((data)=>console.log(data.result))
		.then((data)=>setPlanetId(data.result));
	}

	useEffect(()=>{	
		getPlanet();
		getPlanetid();

	}, [])


	return (
		<div className="jumbotron">
			<h1 className="display-4"> {planet.name} </h1>
			<img src={"https://starwars-visualguide.com/assets/img/planets/"+planetId.uid+".jpg"} className="card-img-top Photo" alt="..."/>
            <span>Population: {planet.population + " "}</span>
			<span>Climate: {planet.climate+ " "}</span>
			<span>Terrain: {planet.terrain+ " "}</span>
			<span>Gravity: {planet.gravity+ " "}</span>
			<span>Climate: {planet.climate+ " "}</span>
			<span>Diameter: {planet.diameter+ " "}</span>
      		

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Double.propTypes = {
	match: PropTypes.object
};