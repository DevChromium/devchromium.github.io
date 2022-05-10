class HistoryElement {
    title;
    text;
    url;

    constructor(_title, _text, _url) {
        this.title = _title;
        this.text = _text;
        this.url = _url;
    }

    get title () { return this.title; }
    get text () { return this.text; }
    get url () { return this.url; }
}

const init = () => {
    const searchBtn = document.getElementById('search__button');
    searchBtn.addEventListener('click', search);

    loadHistory();
}

const loadHistory = () => {
    const history = JSON.parse(localStorage.getItem('history')) || [];
    history.forEach(element => {
        createHistoryCard({title: element.title, text: element.text, url: element.url});
    });
}

const createHistoryCard = ({ title, text, url }) => {
    const history = document.getElementById('history__content');
    const card = document.createElement('div');

    switch (title.toLowerCase()) {
        case "youtube": card.classList.add('youtube'); break;
        case "google": card.classList.add('google'); break;
        case "instagram": card.classList.add('instagram'); break;
        case "twitter": card.classList.add('twitter'); break;
    }

    card.classList.add('card');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    card.appendChild(cardBody);

    const cardTitle = document.createElement('h5');
    const cardTitleTextNode = document.createTextNode(title);
    cardTitle.appendChild(cardTitleTextNode);
    cardTitle.classList.add('card-title');

    const cardText = document.createElement('p');
    const cardTextTextNode = document.createTextNode(text);
    cardText.appendChild(cardTextTextNode);
    cardText.classList.add('card-text');

    const cardButton = document.createElement('button');
    const cardButtonTextNode = document.createTextNode('Go');
    cardButton.classList.add('btn', 'btn-dark');
    cardButton.appendChild(cardButtonTextNode);
    cardButton.addEventListener('click', () => {
        window.open(url, '_blank');
    });

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardButton);

    history.appendChild(card)
}

const addToHistory = (historyElement) => {
    let history = JSON.parse(localStorage.getItem('history')) || [];
    history.unshift(historyElement)
    localStorage.setItem('history', JSON.stringify(history));
}

const search = () => {
    try {
        let query = parseQuery();
        window.open(query.url, '_blank');
        addToHistory(query);
        createHistoryCard({ title: query.title, text: query.text, url: query.url });
    } catch (error) {
        console.log(error);
    }
}

const parseQuery = () => {
    const rawQuery = document.getElementById('query__input').value;
    const command = rawQuery.split(' ').shift();
    const searchQuery = rawQuery.split(' ').slice(1);

    let title;
    let text;
    let url;
    

    if(!command.startsWith("/")) {
        alert("Invalid command)");
        console.log('Invalid command');
    }

    switch(command) {
        case '/y':
            title = 'Youtube';
            text = searchQuery.join(' ');
            url = `https://www.youtube.com/search?q=${searchQuery.join('+')}`;
            break;
        case '/g':
            title = 'Google';
            text = searchQuery.join(' ');
            url = `https://www.google.com/search?q=${searchQuery.join('+')}`;
            break;
        case '/t':
            title = 'Twitter';
            text = searchQuery.join(' ');
            url = `https://twitter.com/hashtag/${searchQuery.join('%20')}`;
            break;
        case '/i':
            title = 'Instagram';
            text = searchQuery.join(' ');
            url = `https://www.instagram.com/explore/tags/${searchQuery.join('%20')}`;
            break;
        default:
            alert("Unknown command!")
            return;
    }

    return new HistoryElement(title, text, url);
}



window.addEventListener('load', init);
