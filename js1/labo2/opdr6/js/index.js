const setup = () => {
    let btnKopieer = document.getElementById('btnKopieer');
    btnKopieer.addEventListener('click', kopieer);
}

const kopieer = () => {
    let txtInput = document.getElementById('txtInput');
    let tekst = txtInput.value;
    let txtOutput = document.getElementById('txtOutput');

    // console.log(tekst);

    txtOutput.innerHTML = tekst;
}

window.addEventListener('load', setup);