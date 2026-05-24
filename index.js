import { loadInteractiveCards } from './modules/loadInteractiveCards.js'

//si, si lo so, *respiro profondo*
document.addEventListener("DOMContentLoaded",

	(() => {//crea una lambda senza nome
		let funct = (event) => {//crea una seconda lambda con nome da usare come callback
			loadInteractiveCards('src/json/home_interactive_cards.json', 'home-interactive-card-holder'); // chiama la funzione importata
			document.removeEventListener("DOMContentLoaded", funct); // il callback rimuove il listener autonomamente
		}; return funct; //ritorna la lambda appena creata
	})());//chiude la pirma lambda, la esegue seduta stante e mette il risultato come callback nel listener