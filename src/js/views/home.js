import React, {useEffect, useState} from "react";
import "../../styles/home.css";
import { Card } from "../component/card";

export const Home = () => {
	
	const [characters, setCharacters]=useState([]); 

	function getCharacters(){
		console.log("acaaa se cargó la vaina")
	}

	useEffect(()=>{
		getCharacters();
		fetch('https://www.swapi.tech/api/people')
		.then((response)=>response.json())
		// .then((data)=>console.log(data.results))
		.then((data)=>setCharacters(data.results))

	}, [])
	
	return(
	<div className="text-center mt-5">
		<h1>Home!</h1>
		{characters.map((character)=><p>{character.name}</p>)}



		<Card name="desde home"/>
		<Card name="Awa"/>
		
	</div>
)};
