// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let masiv = [
    elem1 = 1,
    elem2 = 2,
    elem3 = 3,
    elem4 = 4,
    elem5 = 5,
    elem6 = 6,
    elem7 = 7,
    elem8 = 8,
    elem9 = 9,
    elem10 = 10
]
console.log(masiv)
// --------------------------------------------------------------------------------------
// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let firstBook = {
    title: 'Interest to psychoanalize',
    pageCount: 300,
    genre: 'psychotherapy',
    authors: [
        {name:'Farenheit'},
        {age: 150}
]
}
let secondBook = {
    title: 'Love&Dove',
    pageCount: 150,
    genre: 'drama',
    authors: [
        {name:'Tyhomirov'},
        {age: 50}
    ]
}
let thirdBook = {
    title: 'The DaVinci code',
    pageCount: 400,
    genre: 'mystery',
    authors: [
        {name:'Den Brown'},
        {age: 59}
    ]
}
console.log(firstBook, secondBook, thirdBook)
// ---------------------------------------------------------------------------------------------------------
// Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
 let users = [
      {
          name: 'Alex',
         username: 'Alexx',
         password: 'Alex1237'
      },
     {
         name: 'Ann',
         username: 'Anna',
         password: 'Ann1237'
     },
     {
         name: 'Denis',
         username: 'Den',
         password: 'Den1237'
     },
     {
         name: 'Lolitta',
         username: 'Lola',
         password: 'Lola1237'
     },
     {
         name: 'Antonina',
         username: 'Tonia',
         password: 'Tonia1237'
     },
     {
         name: 'Anatolii',
         username: 'Tolia',
         password: 'Tolia1237'
     },
     {
         name: 'Ihor',
         username: 'Thor',
         password: 'Thor1237'
     },
     {
         name: 'Afanasii',
         username: 'Afan',
         password: 'Afan1237'
     },
     {
         name: 'Nikolay',
         username: 'Kolia',
         password: 'Kolia1237'
     },
     {
         name: 'Oxana',
         username: 'Ksiusha',
         password: 'Ksiu1237'
     }
 ]
console.log(users[0].password,users[1].password,users[2].password,users[3].password,users[4].password,users[5].password,users[6].password,users[7].password,users[9].password,users[9].password,)