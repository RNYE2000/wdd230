const counterElement = document.getElementById('counter');
let pageVisits = localStorage.getItem('pageVisits');
if (!pageVisits) {
    pageVisits = 0;
} else {
    pageVisits = parseInt(pageVisits);
}
pageVisits++;
counterElement.textContent = `Page visits: ${pageVisits}`;
localStorage.setItem('pageVisits', pageVisits.toString());
