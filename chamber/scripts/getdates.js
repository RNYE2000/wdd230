document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("lastModified").innerText = document.lastModified;

    document.body.classList.toggle("dark-mode", localStorage.getItem("darkMode") === "enabled");
});

function toggleNav() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("nav-open");
}