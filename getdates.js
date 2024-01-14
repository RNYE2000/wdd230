document.addEventListener('DOMContentLoaded', function () {
    // Get the current year and update the footer
    document.getElementById('currentYear').innerText = new Date().getFullYear();

    // Get the last modified date and update the second paragraph in the footer
    var lastModifiedElement = document.getElementById('lastModified');
    lastModifiedElement.innerText = 'Last Modified: ' + document.lastModified;
});
