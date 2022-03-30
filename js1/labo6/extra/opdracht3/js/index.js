const setup = () => {
    let button = document.getElementById("submitButton");
    button.addEventListener("click", addParagraph)
}

const addParagraph = () => {
    let myDiv = document.querySelector("#myDIV");
    let newParagraph = document.createElement('p');
    let paragraphText = document.createTextNode('Hello world');

    newParagraph.appendChild(paragraphText);
    myDiv.appendChild(newParagraph);
}

window.addEventListener("load", setup)