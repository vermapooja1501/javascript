const readlineSync = require('readline-sync');
// let a = readlineSync.questionInt("enter a number a ")
// let b = readlineSync.questionInt("enter a number b ");
// let num;
// let den;
// let hcf;
// if(a>b) {
//     num = a ;
//     den = b ;
// }else{
//     num = b ;
//     den = a ;
// }
// r = num%den
// if(r!==0){
//     num = den ;
//     den = r ;
//     r = num%den ;
// }else{
//     hcf = den
// }
// hcf = den ;
// lcm = (a*b)/hcf
// console.log(hcf)
// console.log(lcm)
// armstrong question
// let n = readlineSync.questionInt("enter a number n ")
// let sum = 0;
// let temp = n;
// while (n>0) {
//     rem = n%10
//     n = Math.floor(n/10)
//     sum = sum+rem*rem*rem
// } 
//     if(sum==temp) {
//         console.log(" yes armstrong")
//     }else{
//         console.log("not armstrong")
//     }
// question 4
// let n = readlineSync.questionInt("enter a number n ")
// let num= readlineSync.questionInt("enter a number num ");
// let max = num
// let min = max
// let i = 1
// while ( i<n) {
//     let a = readlineSync.questionInt ("enter a number a ")
//     if(a>max) {
//         max = a
//     }else{
//         if (a<min) {
//             min = a
//         }
//     }
//     i++
// }console.log(max,min)
// question 5
// let n = readlineSync.questionInt("enter a number n ")
// let num = readlineSync.questionInt ("enter a number num ")
// let max = num;
// let secondmax = max;
// i=1
// while (i<n) {
//     let a = readlineSync.questionInt("enter a number a ");
//     if (a>max) {
//       max = a;
//     }else {
//         if (a>secondmax) {
//             secondmax = a
//         }
//     }
//     i++
// }console.log(secondmax)
// question of third max
// let n = readlineSync.questionInt("enter a number n ")
// let num = readlineSync.questionInt("enter a number num ")
// let max = num;
// secondmax = max;
// thirdmax = secondmax;
// let i= 1
// while (i<n){
//     let a = readlineSync.questionInt("enter a number a ")
//     if(a>max) {
//         thirdmax = secondmax;
//         secondmax = max
//         max = a;
//     }else{
//         if(a>secondmax){
//             thirdmax = secondmax;
//             secondmax = a;
//         }else {
//             if(a>thirdmax) {
//                 thirdmax = a ;
//             }
//             }
//         }
//         i++
//     } console.log(thirdmax)
// question 6
// let n = readlineSync.questionInt("enter a number n ");
// let x = readlineSync.questionInt("enter the number of x ");
// let sum = 0;
// let a;
// for (i=1;i<=n; i++) {
//     a = Math.pow(x*i/i);
//     sum = sum+a
// }console.log(sum)
// question prime numbers
// let n = readlineSync.questionInt("enter a number n ")
// for (i = 1; i <= n; i++) {
//     let count = 0
//     for (j = 1; j <= i; j++) {
//         if (i % j == 0) {
//             count = count + 1
//         }
//     }
//     if (count == 2) {
//         console.log(i)
//     }
// }
// question in prime factors
// let n = readlineSync.questionInt("enter a number n ")
// for (i = 1; i <= n; i++) {

//     let primeCount=0;
//     // factors
//     if (n % i == 0) {
//         // prime no.
//     for (let j = 1; j <=i; j++) {
//             if (i%j==0) {
//                 primeCount +=1;
//             }

//         }


//     }
//     if (primeCount==2) {
//         console.log(i)
//     }

// }
// deletion question
// let n = readlineSync.questionInt("enter the size of array ")
// let m = readlineSync.questionInt("enter the value of m ")
// let arr = [];
// for (i = 0; i < n; i++) {
//     arr[i] = readlineSync.questionInt("enter the element of array ")

// }
// let item =m;
// for (j =m-1; j < n; j++) {
//     arr[j] = arr[j + 1]
//     }
//     for (i=0; i<n; i++){
//         console.log(arr[i])
//     }
// duplicate question
// let n = readlineSync.questionInt("enter the size of array ")
// let array = []
// for (let i = 0; i < n; i++) {
//     array[i] = readlineSync.questionInt("enter the element of array ")
// }
// for(i=0; i<n; i++){
//     for(j=i+1; j<n; j++){
//         if(array[i]==array[j]){
//             console.log(array[i])
//         }
//     }
// }
// maximum value
// let n = readlineSync.questionInt("enter the size of array ")
// let array=[];
// for(i=0; i<n; i++){
//     array[i]= readlineSync.questionInt("enter the array of element ")
// }
// let max = array[0]
// for(i=0; i<n; i++){
//     if(max<array[i]){
//         max = array[i]
//     }
// } console.log(max)
// missing question
// let n = readlineSync.questionInt("enter a size of array ")
// let array=[];
// for(i=0; i<n; i++){
//     array[i]=readlineSync.questionInt("enter the element of array ")
// }
// let s1 =0;
// for (i=0; i<n-1; i++){
//     s1 = s1+array[i]
// }
// console.log(s1)
// loops question maximum && minimum
// let n = readlineSync.questionInt("Enter a number n: ");
// let num = readlineSync.questionInt("Enter a number: ");
// let max = num;
// let min = num;
// for (let i = 1; i <n; i++) {
//     let a = readlineSync.questionInt("Enter a number: ");
//     if (a > max) {
//         max = a;
//     }
//     if (a < min) {
//         min = a;
//     }
// }
// console.log(max);
// console.log(min);

// // merge array question
// let n = readlineSync.questionInt("enter the size of array ")
// let arr = [];
// for(i=0; i<n; i++){
//     arr[i]=readlineSync.questionInt("enter the element of array")
// }
// let m = readlineSync.questionInt("enter the size of array ")
// arr =[];
// for(j=0; j<m; j++){
//     arr[j]=readlineSync.questionInt("enter the element of array ")
// }
// let mergedArray = [];
// for(i=0; i<n; i++){
//     for(j=0; j<m; j++){
//         if(arr[i]<=arr[j]){
//             mergedArray=arr[i];
//         }else{
//             mergedArray=arr[j];
//         }
//     }
// }
// console.log(mergedArray)


// let n = readlineSync.questionInt("Enter the size of the first array: ");
// let arr1 = [];
// for (let i = 0; i < n; i++) {
//     arr1[i] = readlineSync.questionInt("Enter the element of the first array: ");
// }

// let m = readlineSync.questionInt("Enter the size of the second array: ");
// let arr2 = [];
// for (let j = 0; j < m; j++) {
//     arr2[j] = readlineSync.questionInt("Enter the element of the second array:")
// }
// let mergedArray = [];
// let i = 0, j = 0;
// while (i < n && j < m) {
//     if (arr1[i] <= arr2[j]) {
//         mergedArray.push(arr1[i]);
//         i++;
//     } else {
//         mergedArray.push(arr2[j]);
//         j++;
//     }
// }
// while (i < n) {
//     mergedArray.push(arr1[i]);
//     i++;
// }
// while (j < m) {
//     mergedArray.push(arr2[j]);
//     j++;
// }
// // console.log("Merged array:", mergedArray);
// // insertion question
// let n = readlineSync.questionInt("enter the size of array ")
// let m = readlineSync.questionInt("enter the size of array")
// let array1 = [];
// let array2 = [];
// for (i = 0; i < n; i++) {
//     array1[i] = readlineSync.questionInt("enter the number of element ")
// }
// for (j = 0; j < n; j++) {
//     array2[j] = readlineSync.questionInt("enter the number of element")
// }
// let intersection = []
// for (i = 0; i < n; i++) {
//     for (j = 0; j < m; j++) {
//         if (array1[i] == array2[j]) {
//             intersection.push(array1[i])
//         }

//     }
// }
// console.log("intersection array", intersection)

// const readlineSync = require('readline-sync');

// Input the sizes of arrays
// let n = readlineSync.questionInt("Enter the size of array 1: ");
// let m = readlineSync.questionInt("Enter the size of array 2: ");

// // Input elements of the first array
// let array1 = [];
// for (let i = 0; i < n; i++) {
//     array1.push(readlineSync.questionInt(`Enter element ${i + 1} of array 1: `));
// }

// // Input elements of the second array
// let array2 = [];
// for (let j = 0; j < m; j++) {
//     array2.push(readlineSync.questionInt(`Enter element ${j + 1} of array 2: `));
// }

// // Combine both arrays to find the union
// let union = array1.slice(); // Create a copy of array1
// for (let j = 0; j < m; j++) {
//     if (!array1.includes(array2[j])) {
//         union.push(array2[j]);
//     }
// }

// // Print the union array
// console.log("Union of the arrays:", union);
// let n = readlineSync.questionInt("enter the size of array ")
// arr = []
// for(i=0; i<n; i++){
//     arr[i]=readlineSync.questionInt("enter the element of array ")
// }
// // console.log(arr)
// let x = readlineSync.questionInt("enter the x is the target position")
// // // c=0
// // c1=0
// let flag =0;
// for(i=0; i<n; i++){
//     if(arr[i]==x){
//         flag=1
//     }
// }
// if(flag==1){
//     console.log("yes")
// }
// else {
//     console.log("no")
// }

//       c+=1
//     }else{
//         c1+=1
//     }
// }
// if (c>=1){
//     console.log("yes")
// }
// else{
//     console.log("no")
// }
// let myName = "pooja"
// console.log( myName);
// console.log(typeof myName)

// bublesort question
// let n = readlineSync.questionInt("enter the size of array");
// let arr = []
// for (i = 0; i < n; i++) {
//     arr[i] = readlineSync.questionInt("enter the element")
// }
// for (i = 0; i < n - 1; i++) {
//     for (j = 0; j <= n - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//             temp = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j + 1] = temp
//         }
//     }
// }
// console.log(arr);
// binary search question
// let n = readlineSync.questionInt("enter the size of array")
// Array= [];
// for(i=0; i<n; i++){
//     Array[i]=readlineSync.questionInt("enter the element ")
// }
// let lower=0;
// let midvalue=0;
// for(i=0;i<n;i++){
//     if(lower<=midvalue){
//          midvalue = Math.floor((lower + upper) / 2);
//         if (array[mid] === target) {
//        console.log(midvalue);
//         }
//     }

// }

// 







