'use strict';

const allBooks = document.querySelectorAll('.books'),
      booksOrder = document.querySelectorAll('.book'),
      background = document.querySelector('body'),
      booksTitle = document.querySelectorAll('.book h2 > a'),
      advertising = document.querySelector('.adv'),
      book2Chapter = booksOrder[0].querySelectorAll('ul > li'),
      book5Chapter = booksOrder[5].querySelectorAll('ul > li');


console.log(book2Chapter);
booksOrder[0].before(booksOrder[1]);
booksOrder[2].before(booksOrder[4]);
booksOrder[2].before(booksOrder[3]);
booksOrder[2].before(booksOrder[5]);

background.style.backgroundImage = 'url("./image/adv.jpg")';

booksTitle[4].textContent = 'Книга 3. this и Прототипы Объектов';

advertising.remove();

book2Chapter[1].after(book2Chapter[3]);
book2Chapter[3].after(book2Chapter[6]);
book2Chapter[6].after(book2Chapter[8]);
book2Chapter[8].after(book2Chapter[4]);
book2Chapter[9].after(book2Chapter[2]);

