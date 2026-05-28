export async function getAPIResponse(json_promise, callback){
    let items = await json_promise; //assumo che ciò che mi arriva sia una promise, se non lo è funziona lo stesso

    items.forEach(item => {

        let overlay = item.overlay;

        Object.keys(overlay).forEach(async key => {
            if (key == "title") return;

            overlay[key] = callback(await fetch(overlay[key]));
        })
        
    })

    return items;
}