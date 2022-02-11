'use strict';

const allBooks = document.querySelectorAll('.books'),
      booksOrder = document.querySelectorAll('.book'),
      background = document.querySelector('body'),
      booksTitle = document.querySelectorAll('.book h2 > a'),
      advertising = document.querySelector('.adv'),
      book2Chapter = booksOrder[0].querySelectorAll('ul > li'),
      book5Chapter = booksOrder[5].querySelectorAll('ul > li'),
      book6Chapter = booksOrder[2].querySelectorAll('ul > li');


console.log(book6Chapter);
// 1 пункт
booksOrder[0].before(booksOrder[1]);
booksOrder[2].before(booksOrder[4]);
booksOrder[2].before(booksOrder[3]);
booksOrder[2].before(booksOrder[5]);
// 2 пункт
background.style.backgroundImage = 'url("./image/adv.jpg")';
// 3 пункт
booksTitle[4].textContent = 'Книга 3. this и Прототипы Объектов';
// 4 пункт
advertising.remove();
// 5 пункт
book2Chapter[1].after(book2Chapter[3]);
book2Chapter[3].after(book2Chapter[6]);
book2Chapter[6].after(book2Chapter[8]);
book2Chapter[8].after(book2Chapter[4]);
book2Chapter[9].after(book2Chapter[2]);

book5Chapter[1].after(book5Chapter[9]);
book5Chapter[9].after(book5Chapter[3]);
book5Chapter[4].after(book5Chapter[2]);
book5Chapter[5].after(book5Chapter[8]);
book5Chapter[2].after(book5Chapter[6]);
book5Chapter[6].after(book5Chapter[7]);
// 6 пункт
book6Chapter[8].insertAdjacentText('afterend' , 'Глава 8: За пределами ES6');

