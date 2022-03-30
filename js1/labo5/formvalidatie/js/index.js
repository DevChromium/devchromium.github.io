const setup = () => {
    const validateBtn = document.getElementById("validate");

    validateBtn.addEventListener("click", validate)

}

const validate = (event) => {

    event.preventDefault();

    let voornaam = document.getElementById('voornaam');
    let familienaam = document.getElementById('familienaam');
    let geboortedatum = document.getElementById('geboortedatum');
    let email = document.getElementById("email");
    let aantalKinderen = document.getElementById('aantalKinderen');

    const errorStyle = `border: 1px solid red;`
    const emailPattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    voornaam.value.length > 30 ? voornaam.style = errorStyle : voornaam.style = "";
    familienaam.value.length > 50 || familienaam.value.length === 0 ? familienaam.style = errorStyle : familienaam.style = "";
    geboortedatum.value.length === 0 ? geboortedatum.style = errorStyle : familienaam.style = "";
    email.value.match(emailPattern) ? familienaam.style = "" : email.style = errorStyle;
    typeof aantalKinderen !== Number || parseInt(aantalKinderen.value) < 0 || parseInt(aantalKinderen.value) > 99 ? aantalKinderen.style = errorStyle : aantalKinderen.style = "";

}


window.addEventListener("load", setup)