let time = 1;
if (time >= 0 && time<= 14) {
    console.log('Четверть години: перша');
}
else if (time >= 15 && time<=29){
    console.log('Четверть години: друга');
}
else if (time >= 30 && time<=44){
    console.log('Четверть години: третя');
}
else if (time >= 45 && time<=59){
    console.log('Четверть години: четверта');
}
else {
    console.log("Неправильне значення для часу")
}
