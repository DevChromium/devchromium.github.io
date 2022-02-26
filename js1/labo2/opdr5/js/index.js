const setup = () => {
    let button = document.getElementById('verander');
    button.addEventListener('click', veranderTekst);
}

const veranderTekst = () => {
    let txtOutputElement = document.getElementById("txtOutput");
    txtOutputElement.innerHTML = "Welkom!";
}

window.addEventListener('load', setup);
