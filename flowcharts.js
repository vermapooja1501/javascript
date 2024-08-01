// let a = 10 , b = 34
// // console.log(a + b)
// let a = 10
// let b = 4
// console.log("a+b =", a+b)
// console.log("a-b =", a-b)
// console.log("a*b =", a*b)
// console.log("a/b =", a/b)
// console.log("a%b=",a%b)
// cons0-ole.log("a+b =", a+b)
// console.log("++a=",++a)
// console.log("--a=",--a)
// console.log("a--=",a--)
//  let age = prompt("what is your age?")
//  if(age>10 && age<20){
//      console.log("your age lies between 10 and 20")
//      }

const { question } = require("readline-sync");

//     console.log("your age doesn't lies between 10 and 20")
//   let date=18
//   let month=12
//   let year=2024
//   console.log(date,month,year)

// let sum = readlineSync.questionInt("enter a number! ")
// let b = readlineSync.questionInt("enter a number! ")
// console.log(sum,b);
// question 1
// const readlineSync = require('readline-sync');
// let date = readlinesync.questionInt("enter a number!")
// let month = readlineSync.questionInt ("enter a number")
// let year = readlineSync.questionInt("enter a number")
// console.log(date,month,year)


// let date = readlineSync.questionInt("Enter a number for date: ");
// let month = readlineSync.question("Enter a number for month: ");
// let year = readlineSync.questionInt("Enter a number for year: ");
// console.log(date, month, year);
// question 2
const readlineSync = require('readline-sync');
// let a = reconstadlineSync.questionInt("enter a number")
// console.log(a);
// question 3
// let a = readlineSync.questionInt("Enter a number a! ")
// let b = readlineSync.questionInt("enter a number b! ")
// let c=a
// a=b
// b=c
// console.log(a,b);
// 
// question 4
// let a = readlineSync.questionInt("Enter a number a!")
// let b = readlineSync.questionInt("enter a number b!")
// console.log("a+b =", a+b)
// console.log("a-b =", a-b)
// console.log("a*b =", a*b)
// console.log("a/b =", a/b)
// console.log("a%b=",a%b)
// question 5
// let a = readlineSync.questionInt("Enter a number a!")
// let b = readlineSync.questionInt("enter a number b!")
// console.log("a+b =", a+b)
// console.log("a-b =", a-b)
// console.log("a*b =", a*b)
// console.log("a/b =", a/b)
// console.log("a%b=",a%b)
// question 6
// let a = readlineSync.questionInt("Enter a number a!")
// let b = readlineSync.questionInt("Enter a number b!")
//  Q = a/b
// R = a%b
// console.log(Q);
// console.log(R);
// question 7
// const readlineSync = require('readline-sync');
// let a = readlineSync.questionInt("enter a number a!")
// let c = a%10
// console.log(c)
// question 8

// let celsius = readlineSync.questionInt("enter a celsius: ")
// let f =(9*celsius/5 + 32);
// console.log(f);
// question 9
// let a = readlineSync.questionInt("enter a number a!")
// let b = readlineSync.questionInt("enter a number b!")
// R = (a%b)
// let outout= a-R
// console.log(outout);
// question 10
// let a = readlineSync.questionInt("enter a number a!")
// let b = readlineSync.questionInt("enter a number b!")
// if (a>b){
//     console.log(a);
// }
// else{
//     console.log(b);
// }
// question 11
// let a = readlineSync.questionInt("enter a number a!")
// if (a%2==0){
//     console.log("even")
// }
// else{
//     console.log("odd")
// }
// question 12
// let a = readlineSync.question("enter a number a!")
// if(a==0){
//     console.log("zero");
// }
// else if(a>0){
//     console.log("positive");
// } else{
//     console.log("Negative");
// }
// question 13
// let I = readlineSync.questionInt("enter a number I!")
// let i = 2 * I;

// console.log("i =", i);
// question 14
// let num1 = readlineSync.questionInt("enter a number num1!");
// let num2 = readlineSync.questionInt("enter a number num2!");
// let num3 = readlineSync.questionInt("enter a number num3!")

// if(num1>num2 && num1>num3) {
//     console.log(num1);
// }
// else if(num2>num3) {
//        console.log(num2);
// } else{
//       console.log(num3);
// }
// question 15
// let num1 = readlineSync.questionInt("enter a number num1! ")
// let num2 = readlineSync.questionInt("enter a number num2! ")
// let num3 = readlineSync.questionInt("enter a number num3! ")
// let num4 = readlineSync.questionInt("enter a number num4! ")
// if (num1>num2 && num1>num3 && num1>num4) {
//     console.log(num1);
// }
// else if(num2>num1 && num2>num3 && num2>num4) {
//     console.log(num2);
// }
// else if(num3>num1 && num3>num2 && num3>num4) {
//     console.log(num3);
// } else {
//     console.log(num4);
// }
// question 16
// let year = readlineSync.questionInt("enter a year! ")
// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//     console.log("Leap year");
// } else {
//     console.log("Not a leap year");
// }
// question 17
// let num1 = readlineSync.questionInt("enter a number num1! ")
// let num2 = readlineSync.questionInt("enter a number num2! ")
// let num3 = readlineSync.questionInt("enter a number num3! ")
// if (num1>num2 && num1>num3) {
//     if(num2>num3) {
//         console.log(num2);
//     }else {
//         console.log(num3);
//     }
// }else if (num2>num1 && num2>num3) {
//     if (num1>num3) {
//         console.log(num1);
//     }else {
//         console.log(num3);
//     }
// }else {
//     if (num1>num2) {
//         console.log(num1);
//     }else{
//         console.log(num2);
//     }
// }
// question 18
// let BS = readlineSync.questionInt("enter a BS! ");
// if(BS<=10000) {
//     HRA = (BS*20/100)
//     DA = (BS*80/100)
//     GS = (BS+HR+DA)
// }
// else if (BS<=20000) {
//     HRA = (BS*25/100)
//     DA = (BS*90/100)
//     GS = (BS+HRA+DA)  
// } else {
//     HRA = (BS*30/100)
//     DA = (BS*95/100)
//     GS = (BS+HRA+DA)   
// }
// console.log(GS);
// question 19
// let unit = readlineSync.questionInt("enter a unit");
// if (unit <= 50) {
//     c = unit * 0.50;
//     totalCharge = c + (20 / 100) * c;
// } else if (unit <= 150) {
//     c = (50 * 0.50) + ((unit - 50) * 0.75);
//     totalCharge = c + (20 / 100) * c;
// } else if (unit <= 250) {
//     c = (50 * 0.50) + (100 * 0.75) + ((unit - 150) * 1.20);
//     totalCharge = c + (20 / 100) * c;
// } else {
//     c = (50 * 0.50) + (100 * 0.75) + (100 * 1.20) + ((unit - 250) * 1.50);
//     totalCharge = c + (20 / 100) * c;
// }
// console.log(totalCharge);
// question 21


// LOOPS QUESTION ;-
// question 23
// let name = readlineSync.question("enter the name: ")
// let n = readlineSync.questionInt("enter a number n: ")

// for (i=0; i<n; i++) {
//     console.log(name)
// }
// question 24
// let n = readlineSync.questionInt("enter a number n: ")
// for (i=1; i<n; i++) {
//     if (i%2==0) {
//         console.log(i);
//     }
// }
// question 25
// let n = readlineSync.questionInt("enter a number n: ")
// let sum = 0;
// for (i=1; i<=n; i++) {
//     if (i%2 !==0){
//         sum += i;
//     }
// }
// console.log(sum);
// question 26
// let m = readlineSync.questionInt("enter a number m: ")
// let n = readlineSync.questionInt("enter a number n: ")
// let sum = 0;
// for (i=m; i<=n; i+=1) {
//     sum +=i
// }
// console.log(sum);
// question 28
// let n = readlineSync.questionInt("enter a number n: ")
// let count = 0
// while (n>0) {
//     r = n%10
//     count +=1
//     n = Math.floor(n/10) 
// }
// console.log(count)
// question 29
// let n = readlineSync.questionInt("enter a number n: ")
// let sum = 0;
// while (n>0) {
//     r = n%10
//     sum = sum+r 
//     n = Math.floor(n/10)
// }
// console.log(sum)
// question 30
// let n = readlineSync.questionInt("enter a number n: ")
// let reverseno = 0
// while (n>0) {
//     r = n%10
//     n = Math.floor(n/10)
//     reverseno =(reverseno*10)+r
// }
// console.log(reverseno)
// question 32
// let n = readlineSync.questionInt("enter a number n: ")
// count = 0;
// for (let i = 1; i <= n; i++) {
//     if (n % i == 0) {
//         count++
//     }
// }

// if (count == 2) {
//     console.log("a prime number");
// } else {
//     console.log("not a prime number");
// }
// question 33
// let n = readlineSync.questionInt("enter a number n: ")
// let sum = 0;
// for (let i=1; i<n; i++) {
//     if (n%i==0) {
//         sum = sum+i
//     }
// }
// if (sum==n) {
//     console.log("a perfect square")
// } else {
//     console.log("not a perfect square")
// }
// question 27
// let n = readlineSync.questionInt("enter a numner n: ")
// let sum = 0;
// let count = 1;
// for (let i=1; i<=n; i++) {
//     sum = sum + 1/i
// } console.log(sum)

// Array question:-
// let n = readlineSync.questionInt("Enter the size of array ");
// let array= [];

// for (let i = 0; i<n; i++) {
//     array[i] = readlineSync.questionInt("Enter the element ");
// }

// for (let i = 0; i<n; i++) {
//     console.log(array[i]);
// }
 

// question 35
// let naturalNumbers = [];
// for (let i = 1; i <20; i++) {
//     naturalNumbers.push(i);
// }
// for (let i = 0; i < naturalNumbers.length; i++) {
//     console.log(naturalNumbers[i]);
// }
// question 36
// let n = readlineSync.questionInt("enter a size of array");
// let array = [];
// for ( let i=0; i<n; i++) {
//     array [i] = readlineSync.questionInt ("enter the elements")
// }
// for(let i=n-1; i>=0; i--) {
//     console.log(array[i]);
// }
// question 37
let n = readlineSync.questionInt("enter a size of array ");
let array = [];
for (let i=0; i<n; i++) {
    array [i] = readlineSync.questionInt ("enter the elements ");
}
let x = readlineSync.questionInt ("enter a number x")
for (let i=0; i<n; i++) {
    if (array[i]==x) {
        console.log("yes")
    } else {
        console.log("no")
    }
}  
// question 38
// let n = readlineSync.questionInt("enter a size of array ");
// let array = [] ;
// for (let i=0; i<n; i++) {
//     array[i] = readlineSync.questionInt ("enter the element ");
// }
// let sum1=0 ; sum2 = 0;
// for (i=0; i<n; i++) {
//     if (array[i]%2==0) {
//         sum1 = (sum1+array[i]);
//     }else {
//         sum2 =(sum2+array[i]);
//     }
// }
// console.log(sum1,sum2)
// question 39
// let n = readlineSync.questionInt("enter a size of array ");
// let array = [] ;
// for (i=0; i<n; i++) {
//     array[i] = readlineSync.questionInt("enter the element")
// }
// for (i=0; i<n; i++) {
//     for(let j=(i+1); j<n; j++) {

//         if(array[i]==array[j]){
//             console.log(array[i]);
//         } 
//     }
// }
// question 40
// let n = readlineSync.questionInt("enter a size of array ");
// let array = [];
// for (i=0;i<n; i++) {
//     array[i] = readlineSync.questionInt("enter the element ");
// } 
// for(i=0;i<n; i++){
//     let count=1 ;
//    for(j=i+1; j<n-1; j++) {
//     if (array[i]==array[j]) {
//         count+= 1
//         console.log(array[i] , count)
//     }
//    } 
// } 
// question40
//    let n = readlineSync.questionInt("Enter the size of array: ");
// let array = [];
// for (let i = 0; i < n; i++) {
//     array[i] = readlineSync.questionInt("Enter the element: ");
// }
// for (let i = 0; i < n; i++) {
//   let str = "";
//     for (let j = 1; j <= array[i]; j++) {
//        str = str + ">"
//     }
//     console.log(str);
// }

// (question largest No)
// let n = readlineSync.questionInt("enter a size of array")
// let array = []
// for(let i=0; i<n; i++) {
//   array [i] = readlineSync.questionInt("enter the element ");
// }
// const output = array.reduce((prev,curr) => {
//     return prev >curr ? prev :curr ;
// }) ;
// console.log(output) ;
// 
// question deletion
// let n = readlineSync.question("enter a size of array ");
// let array = [];
// for (i=0; i<n; i++) {
//     array [i] = readlineSync.questionInt ("enter the elements ");
// }
// let m = readlineSync.questionInt ("Enter the index of the element delete m ")
// let item = array [m];
// for ( j=m; j<n-1; j++) {
//     array[j] = array[j+1]
// }
// for (i=0;i<n-1; i++) {
//     console.log(array[i]);
// }
// other question
// let a = readlineSync.questionInt("enter a number a ");
// let b = readlineSync.questionInt("enter a number b ");
// let c = readlineSync.questionInt("enter a number c ");
// if (a == b && a == c) {
//     console.log("all are equal");
// }
// else if (a==b || b ==c || c==a) {
//     console.log("two are equal")
// } else {
//     if (a > b && b>c) {
//         max = a
//     } else if (b>c) {
//         max = b
//     } else{
//         max = c
//     }
//      if (max % 2 == 0) {
//         console.log("max even no." , max)
//     } else {
//         console.log("max odd number",max)
//     }

// }   
// loops
// let n = readlineSync.questionInt("enter a number n ")
// let sum = 0;
// sum1 = 0;
// let i = 1
// while( i<=n ){
//     if (i%2==0) {
//      sum = sum + i*i
//     } else{
//         sum1= sum1 + i*i*i
//     }
//     i++ ;
// }console.log(sum+sum1)
// array 
// let n = readlineSync.questionInt("enter a size of aaray ")
// array = []
// let product = 1;
// sum = 0
// let positive = 0;
// let counteven = 0;
// let countodd = 0;

// for (i=0; i<n; i++){
//     array[i] = readlineSync.questionInt("enter the element ")
// }
// for(i=0; i<n; i++){
//     if(array[i]>0){
//      sum = sum+array[i]
//     } else{
//        if (array[i]<0) {
//         product = product*array[i]
//        }else{
//        if (array[i]%2==0) {
//         counteven++
//        }else{
//         countodd++
//        }
//        }
//     }
// }console.log(sum)  
// console.log(product)
// console.log(counteven)  
// console.log(countodd) 






























