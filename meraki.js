const readlineSync = require("readline-sync")
// function license_checker(speed){
//     if(speed<70){
//         console.log("ok");
//     }else{
//         let points = Math.floor((speed-70)/5)
//         if(points>12){
//             console.log("license suspended");
//         }else{
//             console.log(points);

//         }
//     }
      
// }
// license_checker(85)

// question12
// function  multiplesOfNumbers( n){
//     let sum = 0;
//     for(i=1; i<=n; i++){
//         if(i%3===0){
//             sum+=i
//         }else
//         if(i%5==0){
//             sum+=i
//         }

//     }
//     console.log(sum);
// }
// multiplesOfNumbers(10)
// question 10
// function eligibleforvote(age){
//     if(age<18){
//         console.log("not eligible");
//     }else{
//         console.log("you are eligible");
//     }
// }
// eligibleforvote(16)
// question 22
function squaresofnumbers(){
    let n = readlineSync.questionInt("enter the number n ")
    for(i=1; i<=n; i++){
        p = i*i
    }
    console.log(p);
}
squaresofnumbers()



