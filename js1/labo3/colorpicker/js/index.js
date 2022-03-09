const setup = () => {

    let sliders = document.getElementsByClassName("slider");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", changeColor);
        sliders[i].addEventListener("input", changeColor);
    }

}

const changeColor = () => {

    let sliders = document.getElementsByClassName("slider");
    let redLabel = document.getElementById("redLabel");
    let blueLabel = document.getElementById("blueLabel");
    let greenLabel = document.getElementById("greenLabel");
    let colorDiv = document.getElementById("color");

    redLabel.textContent = `Red: ${sliders[0].value}`;
    blueLabel.textContent = `Blue: ${sliders[1].value}`;
    greenLabel.textContent = `Green: ${sliders[2].value}`;

    colorDiv.style.backgroundColor = `rgb(${sliders[0].value}, ${sliders[1].value},${sliders[2].value})`

}

window.addEventListener("load", setup)
