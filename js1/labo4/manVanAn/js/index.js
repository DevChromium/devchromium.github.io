const setup = () => {

    const text = "De man van An geeft geen hand aan ambetante verwanten";
    let occurences = text.match(/an/g);
    
    console.log(occurences.length)
    

}

window.addEventListener('load', setup)