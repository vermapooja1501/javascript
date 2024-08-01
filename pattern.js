let readlineSync = require("readline-sync")
// question1
// function Triangle() {
//         let n = readlineSync.questionInt("Enter the number n: ");
//         for (let i = 0; i <= n; i++) {
//             let str = ''; 
//             for (let j = 0; j <= n; j++) {
//                 if (j <= i) {
//                     str += '  '; 
//                 } else {
//                     str+= '* ';
//                 }
//             }
//             console.log(str); 
//         }
//     }
//      Triangle();
// question2
// let n = readlineSync.questionInt("Enter the number n: ");
// for (let i = 1; i <= n; i++) {
//     let str = '';
//     for (let j = 1; j <= i; j++) {
//         str += j;
//     }
//     console.log(str);
// } 
// question 44
// let n = readlineSync.questionInt("enter the number n ")
// for(i=1; i<=n; i++){
//     let str = '';
//     for(j=1; j<=i; j++){
//         str+= "*"
//     }
//     console.log(str);
// }
// question 44(2)
// let n = readlineSync.questionInt("Enter the number n: ");
// let str = '';

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n - i; j++) {
//         str += '  ';
//     }
//     for (let k = 0; k < i; k++) {
//         str += "* ";
//     }
//     str += "\n";
// }
// console.log(str);
// question 44(3)
// let n = readlineSync.questionInt("enter the number n ")
// for(i=1; i<=n; i++){
//     let str = '';
//     for(j=1; j<=n; j++){
//         str+="*"
//     }
//     console.log(str);
// }
question 44(4)
let n = readlineSync.questionInt("enter the number n ")
for (i=1; i<=n ;i++){
    let  str = ""
    for (j=1; j<=n; j++){
        str+="*"
    }
    for(k=1;k<=n; k++){
        str+="*"
    }
    console.log(str);
}