window.alert("hello world");
window.confirm("Are u sure?");
window.prompt("What's your name", "Rick Astley");


console.log(`%cDe return value van de confirm functie als de gebruiker op een van de buttons klikt: ${window.confirm("Are you sure??")}`, 'color: yellow;');

console.log(`%cDe return value van de prompt functie als de gebruiker een tekst intypt en op 'ok' klikt: ${window.prompt("What's your name")}`, 'color: green;');
console.log(`%cDe return value van de prompt functie als de gebruiker op 'cancel' klikt: ${window.prompt("What's your name")}`, 'color: red;');
