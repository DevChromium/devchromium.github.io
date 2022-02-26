const setup = () => {
    let btnSubstring = document.getElementById("substringBtn");
    btnSubstring.addEventListener("click", substring);
}

const substring = () => {
    let txtInput = document.getElementById("txtInput");
    let txtOutput = document.getElementById("txtOutput");
    let txtStart = document.getElementById("txtStart");
    let txtEnd = document.getElementById("txtEnd");
    
    let tekst = txtInput.value;
    let result;
    
    tekst === "" ? result = "(geen output)" :  result = tekst.substring(txtStart.value, txtEnd.value);
    txtOutput.innerHTML = result;
}

window.addEventListener('load', setup);