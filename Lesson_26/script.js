"use strict";

const usdCurr = 28;
const discount = 0.9;


function convert(amount, curr){
    return curr * amount;
}


function promotion(result){
    console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res);

function test(){
    for (let i = 0; i < 5;i++){
        console.log(i);
        if (i === 3) return
    } 
    console.log('Done');
}
test();


function doNothing() {};
console.log(doNothing() === undefined);


function sayHello(name) {
    return `Привет, ${name}!`;
}

console.log(sayHello('Alex'));

function returnNeighboringNumbers(value){
    return [value - 1, value, value + 1]
}

console.log(returnNeighboringNumbers(5));

function getMathResult(base, quantity){//getMathResult(5, 3) => 5---10---15
    if ( typeof(quantity) !== 'number' || quantity <= 0){
        return base;
    }

    let str = '';

    for (let i = 1; i <= quantity; i++){
         if (i === quantity){
            str += `${base * i}`;
        }else{
            str += `${base * i}---`;
        }
    }
return str;
}

console.log(getMathResult(5, 4));
console.log(typeof(number));



