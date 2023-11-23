let exp = prompt('Введіть напрямок програмування');
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0][1] > 5 ) {
    console.log('Супер');
}
if (coursesAndDurationArray[1][1] > 5 ) {
    console.log('Супер');
}
if (coursesAndDurationArray[2][1] > 5 ) {
    console.log('Супер');
}
if (coursesAndDurationArray[3][1] > 5 ) {
    console.log('Супер');
}
if (coursesAndDurationArray[4][1] > 5 ) {
    console.log('Супер');
}
if (coursesAndDurationArray[5][1] > 5 ) {
    console.log('Супер');
}
else {
    console.log('Менеше 5 місяців');
}