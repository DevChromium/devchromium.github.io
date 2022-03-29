const setup = () => {
    const sort = (a,b ) =>  a.localeCompare(b);
    let select = document.getElementById("gemeentes")

    let gemeente;
    let gemeentes = [];

    do {
        gemeente = window.prompt("Geef een gemeente in");
        gemeentes.push(gemeente)
    } while(gemeente.toLowerCase() !== "stop");

    gemeentes.sort(sort);

    for(gemeente of gemeentes) {
        if(gemeente === "stop") return;
        
        let option = document.createElement("option");

        option.value = gemeente;
        option.text = gemeente;

        select.appendChild(option);
    }
} 

window.addEventListener("load", setup);