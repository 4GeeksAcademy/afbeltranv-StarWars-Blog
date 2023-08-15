import React, {useEffect, useState, useContext} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Ccard } from "../component/charactercard";
import { Pcard } from "../component/planetcard";

export const Home = () => {
	
	const [characters, setCharacters]=useState([]); 
	const [planets, setPlanets]=useState([]); 
	const {store, actions}=useContext(Context)

	console.log(store.demo)

	function getCharacters(){
		fetch('https://www.swapi.tech/api/people')
		.then((response)=>response.json())
		// .then((data)=>console.log(data.results))
		.then((data)=>setCharacters(data.results));
	}

	function getPlanets(){
		fetch('https://www.swapi.tech/api/planets')
		.then((response)=>response.json())
		// .then((data)=>console.log(data.results))
		.then((data)=>setPlanets(data.results));
	}

	useEffect(()=>{
		getCharacters();	
		getPlanets();

	}, [])
	
	return(
	<div className="text-center mt-5">
		<h1>Star Wars!</h1>

		<h1>Characters</h1>
		<div className="carrusel">
		{characters.map((character)=><Ccard key= {character.uid} id= {character.uid} name={character.name}/>)}
		</div>
		
		<h1>Planets</h1>
		<div className="carrusel">
		{planets.map((planet)=><Pcard key={planet.uid} id={planet.uid} name={planet.name}/>)}
		</div>
	
		
	</div>
)};
