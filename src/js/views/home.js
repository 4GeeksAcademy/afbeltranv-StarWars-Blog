import React, {useEffect, useState} from "react";
import "../../styles/home.css";
import { Ccard } from "../component/charactercard";
import { Pcard } from "../component/planetcard";

export const Home = () => {
	
	const [characters, setCharacters]=useState([]); 
	const [planets, setPlanets]=useState([]); 

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
		<h1>Home!</h1>
		{characters.map((character)=><Ccard key= {character.uid} id= {character.uid} name={character.name}/>)}
		{planets.map((planet)=><Pcard key={planet.uid} id={planet.uid} name={planet.name}/>)}
	
		
	</div>
)};
