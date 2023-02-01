"use strict";

const str = "teSt";

// console.log(str[2] = 'd');
console.log(str.toLowerCase());//определить регистр строки вверхний или нижний
console.log(str);

const fruit = 'Some fruit';

console.log(fruit.indexOf('q')); //с пятой позиции начинается fruit

/* WARNING*/
const logg = "Hello world";

console.log(logg.slice(6, 10));// от 6 до 10 невключительно


console.log(Myname.slice(12,28).length);
const Myname = "Hello world my name is John";
console.log(Myname.slice(6));//  вырезает до 6 позиции ,начиная с 0

const logo = "Hello world";
console.log(logo.slice(-5, -1));


console.log(logo.substring(6, 11));

console.log(logo.substr(6, 5));// показывает сколько символов необходимо вырезать

/* методы для чисел */

const num = 12.2;
console.log(Math.round(num));//округление числа до ближайшего целого

const test = "12.2px";
console.log(parseInt(test));//перевол в другую систему исчесления без пл точки
console.log(parseFloat(test)); // перевол в другую систему исчесления с пл точкой









