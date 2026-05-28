import { loadInteractiveCards } from './modules/loadInteractiveCards.js'
import { getAPIResponse } from './modules/getAPIResponse.js'

//si, si lo so, *respiro profondo*
document.addEventListener("DOMContentLoaded",

	(() => {//crea una lambda senza nome
		let funct = (event) => {//crea una seconda lambda con nome da usare come callback
			loadInteractiveCards((() => {//crea una terza lambda che ritorna la response da passare al loadInteractiveCards
				return fetch('src/json/astrarium_interactive_cards_cat_stars.json').then(response => { return response.json(); });
			})(), 'astrarium-category-star-card-holder'); // chiama la funzione importata
			document.removeEventListener("DOMContentLoaded", funct); // il callback rimuove il listener autonomamente
		}; return funct; //ritorna la lambda appena creata
	})());//chiude la pirma lambda, la esegue seduta stante e mette il risultato come callback nel listener

document.addEventListener("DOMContentLoaded",

	(() => {//crea una lambda senza nome
		let funct = (event) => {//crea una seconda lambda con nome da usare come callback
			loadInteractiveCards((() => {//crea una terza lambda che ritorna la response da passare al loadInteractiveCards
				return fetch('src/json/astrarium_interactive_cards_cat_planets.json').then(response => { return response.json(); });
			})(), 'astrarium-category-planet-card-holder'); // chiama la funzione importata
			document.removeEventListener("DOMContentLoaded", funct); // il callback rimuove il listener autonomamente
		}; return funct; //ritorna la lambda appena creata
	})());//chiude la pirma lambda, la esegue seduta stante e mette il risultato come callback nel listener


//LISTENER DI PROVA
document.addEventListener("DOMContentLoaded",

	(() => {
		let funct = (event) => {
			console.log(getAPIResponse((() => {
				return fetch('src/json/test.json').then(response => { return response.json(); });
			})(), (response) => { return response.type }));
			document.removeEventListener("DOMContentLoaded", funct);
		}; return funct;
	})());