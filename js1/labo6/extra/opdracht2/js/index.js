const setup = () => {
    

    let body = document.querySelector('body');
    let listItems = document.getElementsByTagName('li');

    for(listItem of listItems) {
        listItem.classList.add('listItem')
    }

    let image = document.createElement('img');
    image.setAttribute('src', 'https://nypost.com/wp-content/uploads/sites/2/2016/09/astley1a.jpg?quality=90&strip=all&w=664')

    body.appendChild(image)
}

window.addEventListener("load", setup)
