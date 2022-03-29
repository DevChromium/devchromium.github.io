const setup = () => {
    let text = 'onoorbaar';

    let i = 0;
    do {
        let trigram = text.slice(i, i + 3);
        trigram.length === 3 ? console.log(trigram) : false;
    
        i++
    } while(i < text.length);
}

window.addEventListener("load", setup);