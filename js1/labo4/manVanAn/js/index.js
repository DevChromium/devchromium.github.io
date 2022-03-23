const setup = () => {

    const text = "De man van An geeft geen hand aan ambetante verwanten";
    let occurences = text.toLowerCase().match(/an/g);
    
    console.log(occurences.length)
    

}

window.addEventListener('load', setup)