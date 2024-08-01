const readlineSync = require("readline-sync")
let x = readlineSync.questionInt("enter the seat number ")
if(x<=50){
    console.log("left");
}else{
    console.log("right");
}



