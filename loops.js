const readlineSync = require ('readline-sync')
let l = readlineSync.questionInt("enter the size of array")
 array = []
for(i=0; i<l; i++){
    array[i]= readlineSync.questionInt("enter the array of element")
}
let p = readlineSync.questionInt("enter the  number")
sum = 0;
let h;
let sum1 = 0
for(i=0; i<l; i++){
    if (array[i]>p){
        sum = sum+array[i]
    }else if(array[i]<p){
        sum1 = sum1+array[i]
    }
    h =(sum+sum1)
}
console.log(h)
//     if(array[i]>=p)
//     sum= sum+array[i]
// }
// console.log(sum)
