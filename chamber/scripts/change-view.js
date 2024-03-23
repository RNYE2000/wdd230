var container = document.getElementById('view-container');
var cardBtn = document.getElementById('card-option');
var listBtn = document.getElementById('list-option');
changeView('card');

function changeView(view) {
    listBtn.classList.remove('active-selection');
    cardBtn.classList.remove('active-selection');

    container.classList.remove('list-view');
    container.classList.remove('card-view');
    container.innerHTML = '';
    container.classList.add(view + '-view');
    fetch('./data/members.json')
    .then(response => response.json())
    .then(response => {
        response.forEach(element => {
            let el = document.createElement('div');
            switch(view) {
                case 'card':
                    cardBtn.classList.add('active-selection');
                    el.innerHTML = `
                        <div class="card directory-card">
                            <h2>${element.name}</h2>
                            <p>${element.address}</p>
                            <p>${element.phone}</p>
                            <p>${element.website}</p>
                            <p>${element.other_info}</p>
                        </div>
                    `;
                    break;
                case 'list':
                    listBtn.classList.add('active-selection');
                    el.innerHTML = `
                        <div class="list">
                        <h2>${element.name}</h2>
                        <p>${element.address}</p>
                        <p>${element.phone}</p>
                        <p>${element.website}</p>
                        <p>${element.other_info}</p>
                        </div>
                    `;
                    break;
            }
            container.appendChild(el);
        });  
    })


}
