const readlineSync = require('readline-sync');
// let u = readlineSync.questionInt("enter a number of unit ");
// if(u<=100){
//     c =(u*0)
// } 
// else if(u<=200) {
//     c =((100*0)+(u-100)*5)
// } else {
//     c = ((100*0)+(100*5)+(u-100)*10)
// }
// console.log(c)
// question 52
// loops 
// let n = readlineSync.questionInt("enter a number n ")
// let  count = 0 
//  let sum = 0
// for (let i = 1; i <= n; i++) {
//    count = 0;
//    for (let j = 1; j <= i; j++) {
//        if (i % j === 0) {
//            count++;
//        }
//    }
//    if (count === 2) {
//        sum += i;
//    }
// }
// console.log(sum)
// question in prime Number
// let n = readlineSync.questionInt ("enter a number n; ")
// for (i=1; i<=n; i++) {
//    count = 0
//    for (j=1; j<=i; j++) {
//      if (i%j==0) {
//       count+= 1
//      }
//    }
//    if (count==2) {
//       console.log(i)
//    }
// }
// fibonacci question
// let n = readlineSync.question("enter a number n: ");
// let a = 0, b = 1;
// console.log(a);
// console.log(b);
// for (let i = 1; i <= n-2; i++) {
//    let c = a + b; 
//     console.log(c);
//     a = b;
//     b = c;
// }
// hcf and lcm question
// let a = readlineSync.questionInt("enter a number a ")
// let b = readlineSync.questionInt ("enter a number b ")
// if (a>b) {
//    num = a 
//    den = b
// } else {
//    num =b
//    den = a
// }
// let r =(num%den) ;
// if (r!=0) {
//    num = den
//    den = r
//    r = num%den
// }else{
//     hcf = den;
// }
// hcf = den
// lcm =(a*b) / hcf;
// console.log(hcf);
// console.log(lcm);
// single digit
// let n = readlineSync.questionInt("enter a number n ")
// let sum = 0
// while (n>0) {
//    r = (n%10);
//    sum =(sum+r);
//    n =Math.floor (n/10) ;
// }
// let s = 0;
// while (sum>0){
//    d = (sum%10) ;
//    s = s+d
//    sum = Math.floor(sum/10)
// } 
// console.log(s)
// question 44
// let n = readlineSync.questionInt("enter a number n ");
// let x = readlineSync.questionInt("enter a number x ")
// let sum = 0
// for(i=1; i<=n; i++){
//    a = (x**i/i)
//    sum = sum+a
// }
// console.log(sum)
// // question 45
// let n = readlineSync.questionInt("enter a number n ");
// let rev = 0
// let temp = n
// while ( n!=0) {
//    r = (n%10) ;
//    n = Math.floor (n/10);
//    rev = (rev*10)+r

// } 
// if(rev==temp) {
//    console.log(" yes palindrome")
// } else{
//    console.log("not palindrome")
// }

// let n = readlineSync.questionInt("Enter the number n ");
// let a = readlineSync.questionInt("Enter a number a: ");
// let b = readlineSync.questionInt("Enter a number b: ");

// let hcf; 
// for (let i = 1; i<= n - 2; i++) {
//     let c = readlineSync.questionInt("Enter a number c: ");
//     while  (a > b) {
//       if (a%b==0){

//       } else {
//         (b%a==0)
//       }
//     } 
//     }
//     let r ;
//     if(r==0){
//         hcf = b
//         a = b
//         b = r
//     }else {
//         a = b
//         b = r
//     } 
//     console.log(hcf) ;
  
// let n = readlineSync.questionInt("enter a size of array ")
// let array = []
// for (i=0; i<n; i++) {
//     array[i] = readlineSync.questionInt("enter the element ");
// }
// for (i=0;i<n; i++) {
//  let j = n-1
//  for (j=n-1; i<j; j--) {
//     if(array[i]==array[j]) {
//         temp=array[i]
//         array[i]=array[j]
//         array[j]=temp
//     }
//  }
    
// }console.log("yes")
// swapping question
// let n = readlineSync.questionInt("enter the size of array ")
// let array = []
// for (i=0; i<n; i++) {
//     array[i] = readlineSync.questionInt("enter the elements")
// }
// for(let i = 0 ; i < n ; i++){
//     for(let j=n-1; j>=0; j--){
//         temp = array[i];
//         array[i]= array[j];
//         array[j]=temp;
//     }
//     console.log(array[i]);
// }
// let j = n-1;
// for (i = 0 ; i < j ; i++ ) {
//         temp=array[i]
//         array[i]=array[j]
//         array[j]=temp
//     }

// console.log(temp)
// question12
