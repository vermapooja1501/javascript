const readlineSync = require('readline-sync')
// let x = readlineSync.questionInt("enter the no of x ")
// let y = readlineSync.questionInt("enter the no of y ")
// if(x>y){
//     console.log("yes")
// }else{
//     console.log("no")
// }
// let x = readlineSync.questionInt("enter the number x")
// let y = readlineSync.questionInt("enter the number y")
// let z = readlineSync.questionInt("enter the number z ")
// if(x>y&& x>z ){
//     console.log(x);
// }else if(y>z){
//     console.log(y);
// }else{
//     console.log(z);
// }
// let salary = readlineSync.questionInt("enter the salray")
// let year = readlineSync.questionInt("enter the year")
// let bonus = 0
// if(year>=5){
//     bonus =(5*salary)/100
// }
// console.log(bonus);
// let n = readlineSync.questionInt("enter the size of array ")
// arr = []
// for(i=0; i<n; i++){
//     arr[i]=readlineSync.questionInt("enter the element of array")
// }
// let x = readlineSync.questionInt("enter the target number")
// for(i=0; i<n; i++){
//     if(n-i<=x){
//         console.log(arr[i]);
//     }
// }
// let n = readlineSync.questionInt("Enter the number n: ");
// let arr = [];
// for (let i = 0; i < n; i++) {
//     arr[i] = readlineSync.questionInt("Enter the element of array: ");
// }
// let flag = 0;
// for (let i = 0; i < n - 1; i++) {
//     if (arr[i] + 1!== arr[i + 1]) {
//         flag = 1;
//         break;
//     }
// }
// if (flag ==1) {
//     console.log("No");
// } else {
//     console.log("Yes");
// }
const readlineSync = require('readline-sync')
let x = readlineSync.questionInt("enter the number of stairs ")
let y = readlineSync.questionInt("enter the no of steps ")
let moves = 0;
let cs=0;
while(cs<x){
    if(cs+y<=x){
        cs+= y
    }else{
        cs+=1
    }
    moves++
}
console.log(moves);

while(b!==0){
    temp = b
    b = a%b;
    a = temp
}
console.log(a);

const readlineSync = require('readline-sync')
// let n = readlineSync.questionInt("enter the size of array ")
// let x = readlineSync.questionInt("enter the cost of coupan")
// let y = readlineSync.questionInt("enter the all items")
// arr = [];
// for (i = 0; i < n; i++) {
//     arr[i] = readlineSync.questionInt("enter the element of array ")
// }
// let totalcost = 0;
// for (i = 0; i < n; i++) {
//     totalcost += arr[i]
// }
//  let withcoupan = x;
// let p =0;
// for(i=0; i<n; i++){
//  withcoupan = arr[i]-y
//     if(withcoupan>0){
// totalcost+= p
//     }else{
//         totalcost+= 0
//     }
// }console.log();

// // totalcost+= arr[i]
// console.log(totalcost);
// console.log(p);

// let p ;
// p = arr[i]-y
// console.log(totalcost);
// console.log(p);
// let x = readlineSync.questionInt("enter the cost of coupan")
// if(i<10){
//      x= (i-10)

// }
// console.log(x);
// let cost= (x-arr[i])
// console.log(cost);
// const readlineSync = require('readline-sync');

// Get inputs from the user
// let n = readlineSync.questionInt("Enter the size of array: ");
// let x = readlineSync.questionInt("Enter the cost of the coupon: ");
// let y = readlineSync.questionInt("Enter the discount per item: ");
// let arr = [];
// for (let i = 0; i < n; i++) {
//     arr[i] = readlineSync.questionInt("Enter the element of array: ");
// }

// // Calculate the total cost without the coupon
// let totalCostWithoutCoupon = 0;
// for (let i = 0; i < n; i++) {
//     totalCostWithoutCoupon += arr[i];
// }

// // Calculate the total cost with the coupon
// let totalCostWithCoupon = x; // Start with the cost of the coupon itself
// for (let i = 0; i < n; i++) {
//     let discountedPrice = arr[i] - y;
//     if (discountedPrice > 0) {
//         totalCostWithCoupon += discountedPrice;
//     } else {
//         totalCostWithCoupon += 0; // Free item
//     }
// }
