const setup = () => {
    let submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', formSubmit);
}

const formSubmit = (event) => {
    // Zorgt ervoor dat de pagina niet wordt herladen
    event.preventDefault();

    let woord = document.getElementById('woord').value;
    console.log(maakMetSpaties(woord));
}

const maakMetSpaties = (inputText) => {
    let result = ""
    for (let i = 0; i < inputText.length; i++) {
        const letter = inputText.charAt(i);
        result += `${letter} `;
    }
    return result;
}

window.addEventListener("load", setup)