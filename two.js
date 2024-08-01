const readlineSync = require('readline-sync');
let n = readlineSync.question("enter a size of array of n ");
let m = readlineSync.questionInt("enter a size of array of m ")
let array1 = []
let array2 = []
for (i = 0; i < n; i++) {
    array1[i] = readlineSync.questionInt("enter the element of array1 ")
}
for (j = 0; j < m; j++) {
    array2[j] = readlineSync.questionInt("enter the elementof array2")
}
let sum = 0
for (i = 0; i < n; i++) {
    for (j = 0; j < m; j++) {
        if (array1[i] == array2[j]) {
            sum = sum + (array1[i])
            break;
        } 
    }
}
console.log(sum)

//     for (j = 0; j < n; j++) {
//         array1[i] = readlineSync.question("enter the element of array1 ")
//         array2[j] = readlineSync.que ofstion("enter the element of array2 ");
//     }
// }
// let p = 0
// let sum = 0
// array[p] = array1[i] + array2[j]
// for (i = 0; i < n; i++) {
//     for (j = 0; j < n; j++) {
//         if (array1[i] == array2[i]) {
//             array[p] = array[i]
//         } else {
//             sum = sum + array[i + j]
//         }
//     }
// } console.log(sum)
