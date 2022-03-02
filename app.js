/*
var titles = document.getElementsByClassName('title')

// console.log(Array.isArray(titles))
// console.log(Array.isArray(Array.from(titles)))

Array.from(titles).forEach(function(item){
    console.log(item);
})

#Note: prints every element in side of the class
*/

const wmf = document.querySelector('#book-list li:nth-child(2) .name');   //grabing the second li with the class 'name' from the div with 'book-list' id
// console.log(wmf);

var books = document.querySelectorAll('#book-list li .name');
// console.log(books);

Array.from(books).forEach(function(book){
    book.textContent += '(book title)';
  });

const bookList = document.querySelector('#book-list');
bookList.innerHTML = '<h2>Books and more books...';
bookList.innerHTML += '<p>This is how you add HTML</p>';