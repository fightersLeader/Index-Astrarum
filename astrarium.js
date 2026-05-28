import { loadInteractiveCards } from './modules/loadInteractiveCards.js'

//come su index.html ma in questo caso gli event listener sono multipli
//in quanto ci sono più categorie distinte di corpi celesti, ciascuno in un contenitore diverso
//nonostante ciò rimangono i comemnti per facilitare la comprensione

document.addEventListener("DOMContentLoaded",

	(() => {//crea una lambda senza nome
		let funct = (event) => {//crea una seconda lambda con nome da usare come callback
			loadInteractiveCards(
				(() => {//crea una terza lambda che ritorna la response da passare al loadInteractiveCards
				return fetch('src/json/astrarium_interactive_cards_cat_stars.json').then(response => { return response.json(); });
				})(),//chiude ed esegue immediatamente la lambda
				'astrarium-category-star-card-holder'
			); // chiama la funzione importata
			document.removeEventListener("DOMContentLoaded", funct); // il callback rimuove il listener autonomamente
		}; return funct; //ritorna la lambda appena creata
	})()
);//chiude la pirma lambda, la esegue seduta stante e mette il risultato come callback nel listener



document.addEventListener("DOMContentLoaded",

	(() => {//crea una lambda senza nome
		let funct = (event) => {//crea una seconda lambda con nome da usare come callback
			loadInteractiveCards(
				(() => {//crea una terza lambda che ritorna la response da passare al loadInteractiveCards
					return fetch('src/json/astrarium_interactive_cards_cat_planets.json').then(response => { return response.json(); });
				})(),//chiude ed esegue immediatamente la lambda
				'astrarium-category-planet-card-holder'
			); // chiama la funzione importata
			document.removeEventListener("DOMContentLoaded", funct); // il callback rimuove il listener autonomamente
		}; return funct; //ritorna la lambda appena creata
	})()
);//chiude la pirma lambda, la esegue seduta stante e mette il risultato come callback nel listener

