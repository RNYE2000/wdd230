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

    let chaptersArray = getChapterList() || [];
    chaptersArray.forEach(chapter => {
        displayList(chapter);
    });
    document.addEventListener("DOMContentLoaded", function () {
        const input = document.getElementById("favchap");
        const addButton = document.getElementById("addChapterBtn");

        addButton.addEventListener("click", function () {
            const chapter = input.value.trim();
            if (chapter !== "") {
                displayList(chapter);
                chaptersArray.push(chapter);
                setChapterList(chaptersArray);
                input.value = "";
                input.focus();
            }
        });
    });
    function displayList(item) {
        const list = document.getElementById("list");

        const listItem = document.createElement("li");
        listItem.textContent = item;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", function () {
            deleteChapter(item);
            listItem.remove();
        });

        listItem.appendChild(deleteButton);
        list.appendChild(listItem);
    }
    function setChapterList(chapters) {
        localStorage.setItem("chaptersList", JSON.stringify(chapters));
    }

    function getChapterList() {
        return JSON.parse(localStorage.getItem("chaptersList"));
    }
    function deleteChapter(chapter) {
        chapter = chapter.slice(0, chapter.length - 1);
        chaptersArray = chaptersArray.filter(item => item !== chapter);
        setChapterList(chaptersArray);
    }



});