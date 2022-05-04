const setup = () => {

    let sliders = document.getElementsByClassName("slider");
    let saveButton = document.getElementById("save");

    saveButton.addEventListener("click", saveColor)

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", changeColorBySliders);
        sliders[i].addEventListener("input", changeColorBySliders);
    }

    if(localStorage.getItem("colors") !== []  && localStorage.getItem("colors") !== null){
        let colors = JSON.parse(localStorage.getItem("colors"));
        for (let i = 0; i < colors.length; i++) {
            createSwatch(colors[i]);
        }
    }

}

const changeColorBySliders = () => {
    let sliders = document.getElementsByClassName("slider");

    let redLabel = document.getElementById("redLabel");
    let blueLabel = document.getElementById("blueLabel");
    let greenLabel = document.getElementById("greenLabel");

    let colorDiv = document.getElementById("color");
    let hexTxt = document.getElementById("hexColor");

    let red = sliders[0].value;
    let green = sliders[1].value;
    let blue = sliders[2].value;

    redLabel.textContent = `Red: ${red}`;
    greenLabel.textContent = `Green: ${green}`;
    blueLabel.textContent = `Blue: ${blue}`;

    let hex = `#${decToHex(red)}${decToHex(green)}${decToHex(blue)}`

    colorDiv.style.backgroundColor = hex
    hexTxt.innerText = hex
}

const saveColor = () => {
    let colorPickerDiv = document.getElementById("color");
    let color;
    colorPickerDiv.style.backgroundColor === "" ? color = "black" : color = colorPickerDiv.style.backgroundColor

    createSwatch(color)

    let colors = JSON.parse(localStorage.getItem("colors")) || [];
    colors.push(color);
    localStorage.setItem("colors", JSON.stringify(colors));

}

const createSwatch = (color) => {
    const savedSwatches = document.getElementById("savedSwatches");
    const swatchCard= document.createElement("div")
    const swatch = document.createElement("div")
    const deleteButton = document.createElement("button");
    const deleteBtnTextNode = document.createTextNode("X");
    const swatchHexColor = document.createElement("p");
    const swatchHexColorTextNode = document.createTextNode(color);


    deleteButton.classList.add("delete")
    deleteButton.appendChild(deleteBtnTextNode);
    deleteButton.addEventListener("click", deleteSwatch);

    swatch.style.backgroundColor = color;
    swatch.classList.add("swatch");
    swatch.addEventListener("click", changeColor);

    swatchHexColor.classList.add("swatchHexColor");
    swatchHexColor.appendChild(swatchHexColorTextNode);

    swatchCard.appendChild(swatch);
    swatchCard.append(swatchHexColor)
    swatchCard.appendChild(deleteButton);
    swatchCard.classList.add("swatchCard");
    savedSwatches.appendChild(swatchCard);

}

const deleteSwatch = (event) => {
    let swatch = event.target.parentElement;
    let colors = JSON.parse(localStorage.getItem("colors"));
    let index = colors.indexOf(swatch.style.backgroundColor);
    colors.splice(index, 1);
    localStorage.setItem("colors", JSON.stringify(colors));
    swatch.remove();
}

const changeColor = (event) => {
    let swatch = event.target;
    let colorPickerDiv = document.getElementById("color");
    colorPickerDiv.style.backgroundColor = swatch.style.backgroundColor;
}

const decToHex = decimal => {
    decimal = parseInt(decimal).toString(16)
    return decimal.length === 1 ? "0" + decimal : decimal;
}


window.addEventListener("load", setup);
