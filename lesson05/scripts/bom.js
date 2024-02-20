document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("favchap");
    const addButton = document.getElementById("addChapterBtn");
    const list = document.getElementById("list");

    addButton.addEventListener("click", function () {
        const chapter = input.value.trim();
        if (chapter === "") {
            input.focus();
            return;
        }

        const listItem = document.createElement("li");
        listItem.textContent = chapter;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", function () {
            listItem.remove();
        });

        listItem.appendChild(deleteButton);
        list.appendChild(listItem);

        input.value = "";
        input.focus();
    });




});