const setup = () => {
    let string1 = "String 1";
    let string2 = "String 2";

    console.log(string1 === string2);
    console.log(string1 === string2.slice(0, 6));
    console.log(string1 + string2 === string1.slice(5));

}

window.addEventListener("load", setup);