// Functie die uitgevoerd wordt wanneer de pagina geladen is
const setup = () => {
	let btnVoegToe = document.getElementById("btnVoegToe");
	btnVoegToe.addEventListener("click", voegToe);
}

// Functie om een image aan de pagina toe te voegen wanneer er op de button geklikt wordt
const voegToe = () => {
	// Leest de tekst uit het textveld en voegt een nieuwe image toe aan de pagina.
	let txtInput = document.getElementById("txtInput");
	let url = txtInput.value;
	let divImages = document.getElementById("divImages");
	divImages.innerHTML += "<img src='"+url+"'>";
	txtInput.value="";
}

// Voegt een event listener toe aan de pagina die uitgevoerd wordt wanneer de pagina geladen is
window.addEventListener('load',setup);



















