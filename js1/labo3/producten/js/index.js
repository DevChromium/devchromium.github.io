const setup = () => {

    let herberekenBtn = document.getElementById("herbereken");
    herberekenBtn.addEventListener("click", herberekenTotaal)
}

const herberekenTotaal = () => {

    let subtotalen = document.getElementsByClassName("subtotaal");
    let totaal = document.getElementById("totaal");
    let prices = document.getElementsByClassName("price");

    // aantallen
    let aantalProduct1 = document.getElementById("product1").value;
    let aantalProduct2 = document.getElementById("product2").value;
    let aantalProduct3 = document.getElementById("product3").value;

    let subtotaalProduct1 = (aantalProduct1 * parseFloat(prices[0].textContent)) * 1.06;
    let subtotaalProduct2 = (aantalProduct2 * parseFloat(prices[1].textContent)) * 1.21;
    let subtotaalProduct3 = (aantalProduct3 * parseFloat(prices[2].textContent)) * 1.21;

    subtotalen[0].textContent = `${subtotaalProduct1.toFixed(2).toString()}`;
    subtotalen[1].textContent = `${subtotaalProduct2.toFixed(2).toString()}`;
    subtotalen[2].textContent = `${subtotaalProduct3.toFixed(2).toString()}`;

    totaal.textContent = (subtotaalProduct1 + subtotaalProduct2 + subtotaalProduct3).toFixed(2).toString();

}



window.addEventListener("load", setup);
