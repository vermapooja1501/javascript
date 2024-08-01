const readlineSync = require('readline-sync')
// let sec = readlineSync.questionInt("enter the number of seconds ")
// hour = Math.floor(sec/3600)
// min = Math.floor((sec%3600)/60)
// remainingsec = (sec%60)
// console.log(hour,min,remainingsec)
// sec = (sec/3600)
// hour = (sec/3600/60)
// console.log(sec,min)
// module 3 
// let n = readlineSync.questionInt("enter the number of n ")
// for (let i = 1; i <= n; i++) {
//     let count = 0;
//     for (let j = 1; j <= i; j++) {
//             if (i % j === 0){
//                 count++
//             }
//         }
//         if(count==2){
//         console.log(i);
//     } 
// }
// let n = readlineSync.questionInt("enter the size of array")
// let arr=[]
// for(i=0; i<n; i++){
//      arr[i] = readlineSync.questionInt("enter the number of element")
// }
// max = arr[0];
// min = max;
// for(i=0; i<n; i++){
//     if (max>arr[i]){
//         max= arr[i]
//     }else if(min<arr[i]){
//         min = arr[i]
//     }
// }console.log(max,min)
let n = readlineSync.questionInt("enter the number of freiends ")
let x = readlineSync.questionInt("enter the number of slice ")
   let  totalslice= (n*x)
    sliceperpizza = 4
    minimumpizza =Math.ceil(totalslice/sliceperpizza)
console.log(minimumpizza)
// loops question
// let n = readlineSync.questionInt("enter the number n")
// let sum = 0;
// for (i = 1; i <n; i++) {
//     a = readlineSync.questionInt("enter the number")
//     sum= sum+a
// }
//  console.log(sum);
