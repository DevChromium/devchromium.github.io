const setup = () => {
    setTimeout(() => {
        let paragraphElement = document.querySelectorAll('p')[0];
        let textNode = document.createTextNode('Good Job!');

        paragraphElement.firstChild.remove();
        paragraphElement.appendChild(textNode);
    }, 2500)
}

window.addEventListener("load", setup)