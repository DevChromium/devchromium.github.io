// Functie die uitgevoerd wordt wanneer de pagina geladen is
const setup = () => {
	// registeer click event listener bij button
	let btnVoegToe = document.getElementById("btnVoegToe");
	btnVoegToe.addEventListener("click", voegToe);
}

// Functie om een nieuw element aan de lijst toe te voegen wanneer er op de button geklikt wordt
const voegToe = () => {
	// Lees de tekst uit het textveld en voeg nieuw <li> element toe
	let txtInput = document.getElementById("txtInput");
	let lstEntries = document.getElementById("lstEntries");
	let tekst = txtInput.value;
	lstEntries.innerHTML += "<li>"+tekst+"</li>";
}

// Voegt een event listener toe aan de pagina die uitgevoerd wordt wanneer de pagina geladen is
window.addEventListener('load',setup);



















