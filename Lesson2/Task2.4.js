let dayOfTheWeek = prompt('Введіть порядковий номер дня тижня');
switch (dayOfTheWeek) {
        case '1':
        console.log('Понеділок: 8:00 - Тренування.' +
             '10:00-18:00 - Робота');
        break;
        case '2':
        console.log('Вівторок: 10:00-18:00 - Робота');
        break;
        case '3':
        console.log('Середа: 8:00 - Тренування.' +
            '            10:00-18:00 - Робота');
        break;
        case '4':
        console.log('Четвер: 10:00-18:00 - Робота');
        break;
        case '5':
        console.log('П`ятниця: 8:00 - Тренування.' +
             '10:00-18:00 - Робота. 19:00 - Зустріч з друзями у барі');
        break;
        case '6':
        console.log('Субота: Вихідний');
        break;
        case '7':
        console.log('Неділя: Ранкова руханка');
        break;
}