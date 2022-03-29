const setup = () => {

    let submitBtn = document.getElementById('submit');

    submitBtn.addEventListener("click", showResult)
}

const showResult = (event) => {
    event.preventDefault()

    let isRoker = document.getElementById("isRoker").checked
    let moedertaal = document.querySelector('input[name="rate"]:checked').value;
    let favorieteBuurlandSelect = document.getElementById('favorieteBuurland');
    let favorieteBuurland = favorieteBuurlandSelect.options[favorieteBuurlandSelect.selectedIndex].text;

    isRoker ? console.log("is een roker") : console.log("is geen roker")
    console.log(`moedertaal is ${moedertaal}`)
    console.log(`Favoriete Buurland is ${favorieteBuurland}`)


}

window.addEventListener("load", setup);
