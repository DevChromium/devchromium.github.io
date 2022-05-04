const init = () => {
    const searchBtn = document.getElementById('search__button');
    searchBtn.addEventListener('click', search);

    loadHistory();
}

const loadHistory = () => {
    const history = JSON.parse(localStorage.getItem('history'));
    if (history) {
        history.forEach(historyItem => {
            createHistoryCard(historyItem)
        });
    }
}

const createHistoryCard = (query) => {
    const history = document.getElementById('history__content');
    const card = document.createElement('div');
    switch (query.title.toLowerCase()) {
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
    const cardTitleTextNode = document.createTextNode(query.title);
    cardTitle.appendChild(cardTitleTextNode);
    cardTitle.classList.add('card-title');

    const cardText = document.createElement('p');
    const cardTextTextNode = document.createTextNode(query.text);
    cardText.appendChild(cardTextTextNode);
    cardText.classList.add('card-text');

    const cardButton = document.createElement('button');
    const cardButtonTextNode = document.createTextNode('Go');
    cardButton.classList.add('btn', 'btn-dark');
    cardButton.appendChild(cardButtonTextNode);
    cardButton.addEventListener('click', () => {
        window.open(query.url, '_blank');
    });

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardButton);

    history.appendChild(card);
}

const addToHistory = (query) => {
    const history = JSON.parse(localStorage.getItem('history')) || [];
    history.unshift(query);
    localStorage.setItem('history', JSON.stringify(history));
}

const search = () => {
    try {
        let query = parseQuery();
        window.open(query.url, '_blank');
        console.log(query);
        addToHistory(query);
        createHistoryCard(query);
    } catch (error) {
        console.log(error);
    }
}

const parseQuery = () => {
    const rawQuery = document.getElementById('query__input').value;
    const command = rawQuery.split(' ').shift();
    // remove first element from query array
    const searchQuery = rawQuery.split(' ').slice(1);

    let url;
    const historyObj = {};

    if(!command.startsWith("/")) {
        alert("Invalid command)");
        console.log('Invalid command');
    }

    switch(command) {
        case '/y':
            url = `https://www.youtube.com/results?search_query=${searchQuery}`;
            historyObj.title = 'Youtube';
            historyObj.text = searchQuery.join(' ');
            historyObj.url = url;

            break;
        case '/g':
            url = `https://www.google.com/search?q=${searchQuery}`;
            historyObj.title = 'Google';
            historyObj.text = searchQuery.join(' ');
            historyObj.url = url;
            break;
        case '/t':
            url = `https://twitter.com/hashtag/${searchQuery}`;
            historyObj.title = 'Twitter';
            historyObj.text = searchQuery.join(' ');
            historyObj.url = url;
            break;
        case '/i':
            url = `https://www.instagram.com/explore/tags/${searchQuery}`;
            historyObj.title = 'Instagram';
            historyObj.text = searchQuery;
            historyObj.url = url;
            break;
        default:
            alert("Unknown command!")
            return;
    }

    return historyObj;
}



window.addEventListener('load', init);
