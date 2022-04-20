let global = {
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 4,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",

    MOVE_DELAY: 1000,

    PLAYFIELD_WIDTH: 600,
    PLAYFIELD_HEIGHT: 800,

    score: 0,
}

let gameInterval;

const setup = () => {
    let target = document.getElementById("target")
    let startButton = document.getElementById("startButton")

    target.addEventListener("click", hitTarget)
    startButton.addEventListener("click", startSpel)
}


const startSpel = () => {
    gameInterval = setInterval(changeLocation, global.MOVE_DELAY)
}

const hitTarget = (event) => {
    let scoreElement = document.getElementById("score")
    let score = document.createTextNode(global.score)

    const srcAttr = event.target.getAttribute("src")

    if(srcAttr !== global.IMAGE_PATH_PREFIX + '0' + global.IMAGE_PATH_SUFFIX) {
        global.score += 1

        scoreElement.firstChild.remove()
        scoreElement.appendChild(score)
        changeLocation()
    } else {
        clearInterval(gameInterval)
        alert('Game over');
        global.score = 0
    }
}

const changeLocation = () => {
    let target = document.getElementById("target")

    let randomImage = Math.ceil((Math.random() * global.IMAGE_COUNT) - 1)

    let x = Math.floor((Math.random() * global.PLAYFIELD_WIDTH) - global.IMAGE_SIZE)
    let y = Math.floor((Math.random() * global.PLAYFIELD_HEIGHT) - global.IMAGE_SIZE)

    target.src = global.IMAGE_PATH_PREFIX + randomImage + global.IMAGE_PATH_SUFFIX
    target.style.left = x + "px"
    target.style.top = y + "px"
}

window.addEventListener("load", setup);


