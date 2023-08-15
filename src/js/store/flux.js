const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			favs: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			addFav: (favName)=>{
				
				const newFav = favName; // The new item you want to add
				const oldFavs = getStore().favs; // Get the current favs array from the store
				console.log(oldFavs)
				const updatedFavs = [...oldFavs, newFav]; // Create a new array by spreading oldFavs and adding newFav
				console.log(updatedFavs)
				setStore({ favs: updatedFavs }); // Update the favs array in the store
			

			},
			removeFav: (name) => {

				const oldFavs = getStore().favs; // Get the current favs array from the store
				const updatedFavs = oldFavs.filter(item => item !== name); // Create a new array by filtering out the item with the specified name
				setStore({ favs: updatedFavs }); // Update the favs array in the store
				
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
