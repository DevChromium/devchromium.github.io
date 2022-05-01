let student = {
    voornaam : "Lucas",
    familienaam : "Pauwels",
    geboorteDatum : new Date("2002‐03‐22"),
    adres : {
        straat : "Not saying",
        postcode : "1000",
        gemeente : "Brussel"
    },
    isIngeschreven : true,
    namenVanExen : ["Leonie", "Janice"],
    aantalAutos : 0
}


const setup = () => {
    let jsonString = JSON.stringify(student);
    console.log(jsonString)

    let jsonObject = JSON.parse(jsonString);
    console.log(jsonObject)
    console.log(jsonObject.voornaam)


}


window.addEventListener('load', setup);
