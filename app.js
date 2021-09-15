const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const btn = document.getElementById('btn');
const bookList = document.getElementById('book-list');

btn.addEventListener('click', function () {
    if (title.value == '' && author.value == '' && year.value == '') {
        alert("Give some value")
    }
    else {
        const newRow = document.createElement('tr');

        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);
        title.value = '';

        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);
        author.value = '';

        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);
        year.value = '';

        bookList.appendChild(newRow);

    }

});