const getElements = () => {
    document.getElementsByClassName("container");
    document.getElementsByName("nav");
    document.getElementById("account-consent-app");
}

window.addEventListener("load", getElements);
