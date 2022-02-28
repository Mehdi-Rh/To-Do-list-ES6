import Book from './modules/classes.js';

const bookTitle = document.querySelector('#title');
const theForm = document.querySelector('form');
const bookAuthor = document.querySelector('#author');
const listBtn = document.querySelectorAll('.listBtn');
const addActive = document.querySelectorAll('.section');

theForm.addEventListener('submit', () => {
  const newBook = new Book(bookTitle.value, bookAuthor.value);
  newBook.addBook();

  Book.displayUI();
  location.reload();

});

Book.displayUI();

const removeButton = document.querySelectorAll('.remove-btn');
removeButton.forEach((item,i) => item.addEventListener('click', () => {
  const deleteBook = new Book(bookTitle.value, bookAuthor.value, i);
  deleteBook.removeBook();
}));

// for (let index = 0; index < removeButton.length; index++) {
//   const element = removeButton[index];
//   element.addEventListener('click', () => {
//       const deleteBook = new Book(bookTitle.value, bookAuthor.value, index);
//       deleteBook.removeBook();
//       location.reload();

//     })
// }

listBtn.forEach((btn, i) => {

  btn.onclick = () => {
    if (i===0) {
      window.location.reload();
    }
    listBtn.forEach((oldBtn) => {
      oldBtn.classList.remove('active');
    });
    btn.classList.add('active');
    addActive.forEach((sec, index) => {
      if (i === index) {
        sec.classList.add('active');
      } else {
        sec.classList.remove('active');
      }
    });
  };
});