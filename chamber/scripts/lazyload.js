document.addEventListener("DOMContentLoaded", function () {
    // Check if localStorage is supported
    if (typeof Storage !== "undefined") {
        // Get the last visit timestamp from localStorage
        var lastVisit = localStorage.getItem("lastVisit");
        // Get the current timestamp
        var currentVisit = Date.now();
        // Update the last visit timestamp in localStorage
        localStorage.setItem("lastVisit", currentVisit);

        // Calculate the time difference between visits
        if (!lastVisit) {
            // If it's the user's first visit
            displayMessage("Welcome! Let us know if you have any questions.");
        } else {
            var timeDifference = currentVisit - lastVisit;
            var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

            if (daysDifference === 0) {
                // If the user visited less than a day ago
                displayMessage("Back so soon! Awesome!");
            } else {
                // If the user visited more than a day ago
                var message = "You last visited ";
                if (daysDifference === 1) {
                    message += "1 day ago.";
                } else {
                    message += daysDifference + " days ago.";
                }
                displayMessage(message);
            }
        }
    } else {
        // If localStorage is not supported
        displayMessage("Local storage is not supported on your browser.");
    }
});

function displayMessage(message) {
    var sidebar = document.getElementById("sidebar");
    sidebar.textContent = message;
}
document.addEventListener("DOMContentLoaded", function () {
    let lazyImages = document.querySelectorAll('img[data-src]');

    const lazyLoad = target => {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');

                    img.setAttribute('src', src);
                    img.removeAttribute('data-src');
                    observer.disconnect();
                }
            });
        });

        io.observe(target);
    };

    lazyImages.forEach(lazyLoad);
});