import { loadInteractiveCards } from './modules/loadInteractiveCards.js'

//chiama loadInteractiveCards al caricamento della pagina per aggiungere le card che contengono la maggior parte del contenuto del sito
//per buona pratica di programmazione l'event listener è autorimuovente, in quanto deve essere chiamato una sola volta
document.addEventListener("DOMContentLoaded",

	(() => {//crea una lambda senza nome
		let funct = (event) => {//crea una seconda lambda con nome da usare come callback
			loadInteractiveCards(
				(() => {//crea una terza lambda che ritorna la response da passare al loadInteractiveCards
				return fetch('src/json/home_interactive_cards.json').then(response => { return response.json(); });
				})(), 'home-interactive-card-holder'); // chiama la funzione importata
			document.removeEventListener("DOMContentLoaded", funct); // il callback rimuove il listener autonomamente
		}; return funct; //ritorna la lambda appena creata
	})()
);//chiude la pirma lambda, la esegue seduta stante e mette il risultato come callback nel listener