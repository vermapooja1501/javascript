const readlineSync = require('readline-sync')
let income = readlineSync.questionInt("enter the income tax ")
if(income<10000){
    tax = income*(5/100)
}else if(income<20000){
    tax = income*(10/100)
}else if(income<30000){
    tax = income*(15/100)
}else{
    tax = income*(20/100)
}
console.log(tax)