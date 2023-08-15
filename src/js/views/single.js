import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const [character, setCharacter]=useState({}); 



	function getCharacter(){
		fetch('https://www.swapi.tech/api/people/'+params.theid)
		.then((response)=>response.json())
		// .then((data)=>console.log(data.result.properties))
		.then((data)=>setCharacter(data.result.properties));
	}
	

	useEffect(()=>{
		getCharacter();			

	}, [])


	return (
		<div className="jumbotron">
			<h1 className="display-4">{character.name} </h1>
			<span>Gender: {character.gender + " "}</span>
			<span>Height: {character.height+ " "}</span>
			<span>Hair Color: {character.hair_color+ " "}</span>
			<span>Skin Color: {character.skin_color+ " "}</span>
			<span>Eye Color: {character.eye_color+ " "}</span>
			<span>Birth Year: {character.birth_year+ " "}</span>		
			

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
