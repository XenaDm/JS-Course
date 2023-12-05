// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangleSquare (a, b) {
    return a * b;

}
console.log(rectangleSquare(5,8))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circleSquare(r) {
    return Math.PI * r * 2;
}
console.log(circleSquare(10))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderSquare (r,h) {
    return 2 * Math.PI * r * (r + h);
}
console.log(cylinderSquare(10, 5))
// - створити функцію яка приймає масив та виводить кожен його елемент

function elements(arr) {
for (const item of arr)
    console.log(item)
}
elements([5, 7, "link", false, null, 0]);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraph(text) {
    document.write(`<p>${text}</p>`);
}
paragraph('text');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function element(text) {
    document.write(`
        <ul>
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>
    </ul>
`);
}
element('lorem')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function checkList(text,num) {
    document.write(`<ul>`)
    for (let i = 0; i <= num; i++) {
        document.write(`<li>${text}</li>`);
    }
    (`</ul>`)
}
checkList('lorem', 2);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250