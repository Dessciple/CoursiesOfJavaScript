const arr = ["a", "b", "c"];


arr[10] = '3456';

console.log(arr[10]);
console.log(arr);




const arrObj = {
    a:"a",
    "1":"b",
    2:"c",
    abc: {
        df: [{}, {}],
        def: {

        }
    }
};
const b = 'b';
arrObj[b] = [];

// arrObj.b = '1234'; //новое ключ: значение 
arrObj['b'] = '1234';


console.log(arrObj["b"]); //обращение кэлементу массива по его значению
console.log(arrObj.b);
// const obj = {a: 1,b: 2};

const obj = {
    'Anna': 500,
    'Alice': 800,
};



