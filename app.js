/*
var titles = document.getElementsByClassName('title')

// console.log(Array.isArray(titles))
// console.log(Array.isArray(Array.from(titles)))

Array.from(titles).forEach(function(item){
    console.log(item);
})

#Note: prints every element in side of the class
*/

// const wmf = document.querySelector('#book-list li:nth-child(2) .name');   //grabing the second li with the class 'name' from the div with 'book-list' id
// // console.log(wmf);

// var books = document.querySelectorAll('#book-list li .name');
// // console.log(books);

// Array.from(books).forEach(function(book){
//     book.textContent += '(book title)';
//   });

// const bookList = document.querySelector('#book-list');
// bookList.innerHTML = '<h2>Books and more books...'; #changing book-list to the h2
// bookList.innerHTML += '<p>This is how you add HTML</p>'; #adding p to the book-list

// const banner =  document.querySelector('#page-banner');

// console.log('#page-banner node type is:', banner.nodeType); # finding its type
// console.log('#page-banner node name is:', banner.nodeName); # finding what kind of element is it
// console.log('#page-banner has child nodes:', banner.hasChildNodes()); # finding if it has childs

// const clonedBanner = banner.cloneNode(true)
// console.log(clonedBanner) # printing page-banner and its childs 

// const bookList = document.querySelector('#book-list')

// // console.log('the parent node is:', bookList.parentNode)
// // console.log('the parent element of book-list parent element is:', bookList.parentElement.parentElement)

// // console.log(bookList.children)

// console.log('book-list next sibling is:', bookList.nextSibling);
// console.log('book-list next sibling is:', bookList.nextElementSibling);

// console.log('book-list previous sibling is:', bookList.previousSibling);
// console.log('book-list previous sibling is:', bookList.previousElementSibling);

// bookList.previousElementSibling.querySelector('p').innerHTML += '<br>Too cool for everyone else!'

// var h2 = document.querySelector('#book-list h2')

// h2.addEventListener('click', function(e){
//     console.log(e.target);
//     console.log(e);
// })


// const link = document.querySelector('#page-banner a')

// link.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log('navigation to', e.target.textContent, 'was prevented')
// })

document.addEventListener('DOMContentLoaded', function(){

    const list = document.querySelector('#book-list ul');
    const forms = document.forms;

// delete books
list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

// add book-list
const addForm = forms['add-book'];

addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    
    //create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //add content
    deleteBtn.className = 'delete';
    deleteBtn.textContent = 'delete';
    bookName.className = 'name'
    bookName.textContent = value;

    //another way off adding class
    /*
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');
    */

    //append to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
    })

    // hide books
    const hideBox = document.querySelector('#hide');
    hideBox.addEventListener('change', function(e){
        if(hideBox.checked){
            list.style.display = "none";
        } else {
            list.style.display = "initial";
        }
    });

    // filter books
    const searchBar = forms['search-books'].querySelector('input');
    searchBar.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach((book) => {
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(e.target.value) != -1){
        book.style.display = 'block';
        } else {
        book.style.display = 'none';
        }
    });
    });


    // tabbed content
    const tabs = document.querySelector('.tabs');
    const panels = document.querySelectorAll('.panel');
    tabs.addEventListener('click', (e) => {
    if(e.target.tagName == 'LI'){
        const targetPanel = document.querySelector(e.target.dataset.target);
        Array.from(panels).forEach((panel) => {
        if(panel == targetPanel){
            panel.classList.add('active');
        }else{
            panel.classList.remove('active');
        }
        });
    }
    });



})

