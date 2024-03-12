const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.table(data); // Check data in console
        displayProphets(data.prophets);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayProphets(prophets) {
    prophets.forEach(prophet => {
        const card = document.createElement('section');

        const fullName = document.createElement('h2');
        fullName.textContent = `${prophet.firstName} ${prophet.lastName}`;

        const portrait = document.createElement('img');
        portrait.setAttribute('src', prophet.imageURL);
        portrait.setAttribute('alt', `${prophet.firstName} ${prophet.lastName}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200'); // Adjust width as needed
        portrait.setAttribute('height', '200'); // Adjust height as needed

        card.appendChild(fullName);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

getProphetData();