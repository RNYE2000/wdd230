// document.addEventListener("DOMContentLoaded", function () {
//     // Check if localStorage is supported
//     if (typeof Storage !== "undefined") {
//         var lastVisit = localStorage.getItem("lastVisit");
//         var currentVisit = Date.now();
       
//         localStorage.setItem("lastVisit", currentVisit);

      
//         if (!lastVisit) {
            
//             displayMessage("Welcome! Let us know if you have any questions.");
//         } else {
//             var timeDifference = currentVisit - lastVisit;
//             var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

//             if (daysDifference === 0) {
                
//                 displayMessage("Back so soon! Awesome!");
//             } else {
            
//                 var message = "You last visited ";
//                 if (daysDifference === 1) {
//                     message += "1 day ago.";
//                 } else {
//                     message += daysDifference + " days ago.";
//                 }
//                 displayMessage(message);
//             }
//         }
//     } else {
    
//         displayMessage("Local storage is not supported on your browser.");
//     }
// });


// function displayMessage(message) {
//     var sidebar = document.getElementById("display-message");
//     sidebar.textContent = message;
// }







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