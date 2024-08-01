const readlineSync = require('readline-sync')
// function commonElement() {
//     let n = readlineSync.questionInt("enter the size of array ");
//     let arr = [];
//     for (i = 0; i < n; i++) {
//         arr[i] = readlineSync.questionInt("enter the element of array ")
//     }
//     let num = readlineSync.questionInt("enter the size of array ")
//     let arr1 = [];
//     for (j = 0; j < num; j++) {
//         arr1[j] = readlineSync.questionInt("enter the element of array ")
//     }
//     let array = [];
//     let k = 0;
//     for (i = 0; i < n; i++) {
//         for (j = 0; j < num; j++) {
//             if (arr[i] === arr1[j]) {
//                 array[k] = arr[i];
//                 k++
//             }
//         }
//     }
//     console.log(array);
// }
// commonElement();
// question 5
// function largest() {
//     let n = readlineSync.questionInt("Enter the size of the array: ");
//     let arr = [];

//     for (let i = 0; i < n; i++) {
//         arr[i] = readlineSync.questionInt(`Enter element `);
//     }

//     let max = arr[0]; 
//     for (let i = 0; i < n; i++) {
//         if (max<arr[i]) {
//             max = arr[i];
//         }
//     }

//     return max;
// }

// console.log(largest());
// let n = readlineSync.questionInt("Enter the number  ");
// let count = 0; 
// let num = 2;

// while (count < n) {
//     let flag = 1; 
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i == 0) {
//             flag = 0; 
//             break;
//         }
//     }

//     if (flag == 1) { 
//         console.log(num);
//         count++;
//     }

//     num++;
// }

// pratice stringmethod
// let letter = "12345678";
// console.log(letter.charAt(6));
// let text = "HELLO WORLD" ;
// console.log(text[8]);
// sloce method
// let fruit = "Apple,Banana,kiwi";
// // console.log(fruit.slice(7,13));
// console.log(fruit.slice(-12));
// function greet(parameter1,parameter2){
//     console.log("js is the best programming");
// }
// greet()

