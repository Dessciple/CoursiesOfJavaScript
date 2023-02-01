"use strict";
if (1){//1 всегда правда
    console.log('Ok');
} else {
    console.log('error');
}

const num = 50;

if (num < 49){
    console.log('error');
} else if (num > 100){
    console.log('много');
} else {
    console.log('ok');
}

(num === 50) ? console.log('ok') : console.log('error'); //тернальный оператор



const num = "50";
switch(num){//всегда идет на строгое соответсткие
    case 49:
        console.log('Неверно');
        break;
    case "100":
        console.log('Неверно');
        break;
    case "51":
        console.log('в точку');
        break;
    default:
        console.log('Не в этот раз');
        break;
}

