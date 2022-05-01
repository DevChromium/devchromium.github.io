let personen = [];

const bewaarBewerktePersoon = () => {

    const voornaam = document.getElementById("txtVoornaam").value;
    const familienaam = document.getElementById("txtFamilienaam").value;
    const geboortedatum = document.getElementById("txtGeboorteDatum").value;
    const email = document.getElementById("txtEmail").value;
    const aantalKinderen = document.getElementById("txtAantalKinderen").value;
    const invalid = document.getElementsByClassName("invalid");

    console.log("Klik op de knop bewaar");

    valideer();

    if(invalid.length === 0) {
        const selectElement = document.getElementById("lstPersonen");
        if(selectElement.selectedIndex !== -1) {
            let persoon = personen[lijstPersonen.selectedIndex];

            persoon.voornaam = voornaam;
            persoon.familienaam = familienaam;
            persoon.geboortedatum = geboortedatum;
            persoon.email = email;
            persoon.aantalKinderen = aantalKinderen;
        } else {
            const persoon = {
                voornaam: voornaam,
                familienaam: familienaam,
                geboortedatum: geboortedatum,
                email: email,
                aantalKinderen: aantalKinderen
            };

            voegPersoonToeAanLijst(persoon);
            sorteerPersonen()

            personen.push(persoon);
        }
    }

};


// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
};


const voegPersoonToeAanLijst = ({ voornaam, familienaam }) => {
    const selectElement = document.getElementById("lstPersonen");
    const optionElement = document.createElement("option");
    const optionTextNode = document.createTextNode(`${voornaam} ${familienaam}`);

    optionElement.appendChild(optionTextNode);
    selectElement.appendChild(optionElement);
}

const selecteerPersoon = () => {
    const selectElement = document.getElementById("lstPersonen");
    const persoon = personen[selectElement.selectedIndex];

    document.getElementById("txtVoornaam").value = persoon.voornaam;
    document.getElementById("txtFamilienaam").value = persoon.familienaam;
    document.getElementById("txtGeboorteDatum").value = persoon.geboortedatum;
    document.getElementById("txtEmail").value = persoon.email;
    document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;

    selectElement.selectedIndex = -1;
}

const sorteerPersonen = () => {
    const selectElement = document.getElementById("lstPersonen");
    const options = selectElement.options;
    const optionsArray = [];

    for(let i = 0; i < options.length; i++) {
        optionsArray.push(options[i].text);
    }

    optionsArray.sort();

    for(let i = 0; i < optionsArray.length; i++) {
        options[i].text = optionsArray[i];
    }
}

const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", selecteerPersoon)
};

window.addEventListener("load", setup);
