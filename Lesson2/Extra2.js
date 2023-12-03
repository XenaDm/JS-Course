// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.

    let a = 1025;
let b = 29934;
let c = 123456;
if (a>b&&a<c||a<b&&a>c) {
    middleNumber = a;
}
else if (b>a&&b<c||b<a&&b>c) {
    middleNumber = b;
}
else if (c>a&&c<b||c<a&&c>b) {
    // console.log(`c = ${b} це середнє число`)
    middleNumber = c;
}
console.log(middleNumber+" - це середнє число");

let between2others = (a>b&&a<c||a<b&&a>c);
console.log('Чи перше число між двома іншими?' + between2others)