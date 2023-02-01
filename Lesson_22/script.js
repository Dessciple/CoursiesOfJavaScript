"use strict";

// let num = 50;

// while (num <= 55){
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }

// while (num < 55);

for (let i = 1; i < 10; i++){
    if (i === 6) {
        // break;
        continue;
    }
    console.log(i);
}

for (i = 5; i <= 10;i++ ){
    console.log(i);
}

// let num = 5
// for (i = 5; i <= 10;i++ ){
//     console.log(num);
//     num++;
// }
// let num = 20;
// for (let i = 1; i <= 10; i++){
//         console.log(num);
//         num--;

// }

let num = 20;
for (let i = 1; i <= 10; i++){
    console.log(num);
    num--;
    if (num <= 14){
        console.log(num);
        break;
    }
}

for (i = 20; i >=10; i--){
    if (i ===13){
        break;
    }
    console.log(i);
}

for (i = 1; i < 11; i++){
    if (i % 2 == 0){
        console.log(i);
    }
}