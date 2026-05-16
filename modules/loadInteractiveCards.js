

//funzione che si attiva una volta dopo il caricamento del documento
//crea le card nella home a partire dai dati nel file home_interactive_cards.json
//questo serve per semplificare l'aggiunta di nuove card per me, si potrebbe omettere

//'../src/json/home_interactive_cards.json'

export async function loadInteractiveCards(sfilepath) {
    try {
        //prende i dati dal file json, usa await perchè fetch() di base è async
        const response = await fetch(sfilepath);
        //parsa i dati della stringa json in un array di oggetti
        const items = await response.json();
        //trova l'elemente con l'id home-interactive-card-holder per poter inserire le card
        const container = document.getElementById('home-interactive-card-holder');

        let counter = 0;
        //per ogni oggetto nell'array usa i dati per creare una card secondo la lambda sottostante
        items.forEach(item => {
            //crea una div che ospiterà tutti i dati
            const card = document.createElement('div');
            //aggiunge le classi necessarie alla corretta visualizzazione
            card.className = 'card, home-interactive-card';
            card.setAttribute("number", counter);
            //aggiunge gli elementi interni
            card.innerHTML = `
            <h3>${item.title}</h3>
            <img src="src/img/${item.img}">
            <p>${item.description}</p>
            `;
            // inserisce la div all'interno del contenitore trovato fuori dal loop
            container.appendChild(card);
            

            // crea l'elemento popup associato alla card corrente
            const popup = document.createElement('div');
            popup.className = 'popup-overlay';
            popup.setAttribute("number", counter);
            popup.innerHTML = `
                <div class="card" style="
                    width: 65%;
                    height: 65%;
                    margin-left: 13%;
                    margin-top: 130px;
                ">
                    <h2> ${ item.overlay.title }</h2 >
                    <pstyle="
                        overflow-y: scroll;
                        overflow-wrap: anywhere;
                        width: 100%;
                        height: 100%;
                    ">${item.overlay.description}</p>
                </div>
            `;

            document.body.appendChild(popup);
            // aggiunge l'event listener per vedere se l'utente clicca sulla card
            card.addEventListener("click", makeCardClickCallback(popup));

            //incrementa il counter per distinguere il seguente elemento da queslli precedenti
            counter++;
        });
    } catch (error) {
        console.error('Error loading configuration data:', error);
    }
}

//funzione che viene chiamata durante la creazione delle card
//crea una funzione di callback per un event listener che ha dei dati extra embedded al suo interno
function makeCardClickCallback(data) {

    //questa è la funzione interna che rimane nell'event listener
    return function (event) {
        //evita che ò'evento si propaghi e faccia partire altri listener
        event.stopPropagation();

        console.log("event: click; object: home interact. card; number:" + data.getAttribute("number"));

        data.style.display = "unset";

        data.addEventListener("click", makeOverlayClickCallback(data));

    }
}

//equivalente alla funzione immediataente sopra ma per l'overlay
function makeOverlayClickCallback(data) {

    //questo callback nasconde nuovamente l'overlay e rimuove il listener automaticamente
    const funct = (event) => {
        event.stopPropagation();

        console.log("event: click; object: home card overlay; number:" + data.getAttribute("number"));

        data.style.display = "none";

        data.removeEventListener("click", funct);
    }

    return funct;

}

//document.addEventListener('DOMContentLoaded', loadHomeCards);
