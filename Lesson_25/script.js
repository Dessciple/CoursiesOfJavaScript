"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num)
}

showFirstMessage("hello world!");
console.log(num);


// console.log(calc(5,7));
// function calc(a,b) {
//     return (a+b);
// }

// console.log(calc(1,2));


function ret() {
    let num = 50;

    //


    return num;
}
const anotherNum = ret();
console.log(anotherNum);


const logger = function(){
    console.log('hello');
};

logger();

const calc = (a, b) => {return a + b};



