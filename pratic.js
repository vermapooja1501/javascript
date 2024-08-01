const readlineSync = require('readline-sync')
// let x = readlineSync.questionInt("enter the number");
// let y = readlineSync.questionInt("enter the number of cost")
// let n =(y%x)
// console.log(n);

// question2
function (){
    let n = readlineSync.questionInt("enter the size of array ")
    arr = [];
    for(i=0; i<n; i++){
        arr[i]= readlineSync.questionInt("enter the element")
    }
    let p = 0;
    for(i=0; i<n; i++){
        for(j=1; j<n; j++){
            p+=arr[i]

        }
    }

}
function ()