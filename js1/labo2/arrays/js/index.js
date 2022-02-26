let family = ["Lucy", "Lucas", "Lukas", "Luca", "Luka"];

console.log(`3e Element: ${family[2]}\n5e Element: ${family[4]}`);

const voegNaamToe = (naam) => {
    family.push(naam)
};

voegNaamToe(window.prompt("Voeg een naam toe"));

console.log(family);

console.log(family.toString())


