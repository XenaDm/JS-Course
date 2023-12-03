// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
 let apartmentNumber = prompt('Введіть номер квартири')
if (apartmentNumber>=1 && apartmentNumber<=20) {
    console.log('Перший підїзд')
}
else if (apartmentNumber>=21 && apartmentNumber<=48) {
    console.log('Другий підїзд')
}
else if (apartmentNumber>=49 && apartmentNumber<=90) {
    console.log('Третій підїзд')
}
else {
    prompt('Введіть номер квартири')
}