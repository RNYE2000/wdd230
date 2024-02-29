document.addEventListener("DOMContentLoaded", function () {

    let message = document.getElementById('display-message');

    if (checkForInitalVisit() == 0) {
        setInitialValues();
        message.innerHTML = 'Welcome! Let us know if you have any questions.'
    } else if (diffDates() <= 1) {
        message.innerHTML = 'Back so soon! Awesome!';
    } else {
        message.innerHTML = `You last visited ${diffDates()} days ago`
    }

});

function checkForInitalVisit() {
    return localStorage.getItem('numberOfVisits');
}

function setInitialValues() {
    localStorage.setItem('numberOfVisits', 0);
    localStorage.setItem('dateLastVisited', Date.now());
}

function diffDates() {
    let lastVisit = parseInt(localStorage.getItem('dateLastVisited'));
    let visit = Date.now();
    return (visit - lastVisit) / (1000 * 60 * 60);
}