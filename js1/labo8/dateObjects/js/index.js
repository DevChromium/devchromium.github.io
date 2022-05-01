const setup = () => {
    const vandaag = new Date();
    const geboortedatum = new Date(2002, 2, 22)
    const dagen = Math.floor((vandaag - geboortedatum) / (1000 * 60 * 60 * 24));

    console.log(dagen + ' dagen')
}

window.addEventListener("load", setup);
