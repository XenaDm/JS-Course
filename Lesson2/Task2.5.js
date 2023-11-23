let number1 = prompt('Введіть перше число');
let number2 = prompt('Введіть друге число');

if (number1 > number2) {
    console.log(`${"Максимальне число:"} ${number1}`)
}
 else if (number1 < number2) {
    console.log(`${"Максимальне число:"} ${number2}`)
}
 else if (number1 === number2) {
     console.log('Числа рівні')
}
 else {
     console.log('Будь ласка, введіть числа.')
}