const setup = () => {

    let herberekenBtn = document.getElementById("herbereken");
    herberekenBtn.addEventListener("click", herberekenTotaal)
}

const herberekenTotaal = () => {

    let subtotalen = document.getElementsByClassName("subtotaal");
    let totaal = document.getElementById("totaal");

    // prijzen
    let priceProduct1 = parseFloat(document.getElementById("priceProduct1").textContent);
    let priceProduct2 = parseFloat(document.getElementById("priceProduct2").textContent);
    let priceProduct3 = parseFloat(document.getElementById("priceProduct3").textContent);

    // aantallen
    let aantalProduct1 = document.getElementById("product1").value;
    let aantalProduct2 = document.getElementById("product2").value;
    let aantalProduct3 = document.getElementById("product3").value;

    let subtotaalProduct1 = (aantalProduct1 * priceProduct1) * 1.06;
    let subtotaalProduct2 = (aantalProduct2 * priceProduct1) * 1.06;
    let subtotaalProduct3 = (aantalProduct3 * priceProduct1) * 1.06;

    subtotalen[0].textContent = `${subtotaalProduct1.toFixed(2).toString()} Eur`;
    subtotalen[1].textContent = `${subtotaalProduct2.toFixed(2).toString()} Eur`;
    subtotalen[2].textContent = `${subtotaalProduct3.toFixed(2).toString()} Eur`;

    totaal.textContent = (subtotaalProduct1 + subtotaalProduct2 + subtotaalProduct3).toFixed(2).toString() + ' Eur';

}



window.addEventListener("load", setup);
