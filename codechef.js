const readlineSync = require('readline-sync')
// let n = readlineSync.questionInt("enter the number n ")
// let x;
// x = (100-n);
// console.log(x)
// let weight = readlineSync.questionInt("enter the number of weight ")
// let height = readlineSync.questionInt("enter the  number of height")
// let bmi = weight / (height * height);
// if(bmi<18.5){
//     console.log("underweight")
// }else if (bmi < 24.9){
//     console.log("healthyrweight");
// }else if(bmi>29.9){
//     console.log("overweight")
// }
// let n = readlineSync.questionInt("enter the number of dice  ")
// let k = readlineSync.questionInt("enter the no of times of alice ")
// arr=[]
// for(i=0; i<n; i++){
//   arr[i]=readlineSync.questionInt("enter the element of array ") 
// }
// let sum = 0;
// for(i=0; i<n; i++){
//     if (arr[i]==k){
//      sum = sum+arr[i]
//     }
// }console.log(sum)
// question3
// let n = readlineSync.questionInt("enter the size of array ")
// let array = [];
// for (i = 0; i < n; i++) {
//   array[i] = readlineSync.questionInt("enter the array of element ")
// }
// let max = array[0]
// let min = max
// let p;
// for (i = 0; i < n; i++) {
//   if (max < array[i]) {
//     max = array[i]
//  } else
//   if (min > array[i]) {
//     min = array[i]
//   }
//    p = max-min

// } console.log(p);

// } console.log(max)
// let n = readlineSync.questionInt("enter the size of array ")
// let array=[]
// for(i=0; i<n; i++){
//   array[i]=readlineSync.questionInt("enter the array of element ")
// }
// let min =array[0]
// for(i=0; i<n; i++){
// if(min>array[i]){
//   min=array[i]
// }
// }console.log(min);
// let count=0, rev=0
// let n = readlineSync.questionInt("enter the number n ")
// for(i=1; i<=n; i++){
//     if(n%i==0){
//         count++
//     }
// }
// if(count==2){
//     if(n>0){
//         r=n%10
//         n=Math.floor(n/10)
//         rev=10+r
//     }else
//        if (rev==n){
//        console.log("twisted Number")
//        }else{
//         console.log("not twisted number");
//        }
//     }
// let n = readlineSync.questionInt("enter the size of array ")
// let arr = [2 , 45, 61 , 43];
// for(let i = 0; i < arr.length; i++ ){
//     console.log(arr[i]);
// }
// let d = readlineSync.questionInt("enter the days ")
// if(d==4){
//     console.log("yes");
// }else{
//     console.log("no");
// }
// old database ques
// let phy = readlineSync.questionInt("enter the marks of phy ");
// let chem = readlineSync.questionInt("enter the marks of chem ");
// let bio = readlineSync.questionInt("enter the marks of bio ");
// let math = readlineSync.questionInt("enter the marks of math ");
// let comp = readlineSync.questionInt("enter the marks of comp");
// let per = ((phy+chem+bio+math+comp)*100/500)
// if(per>=90){
//     console.log("a");
// }else if(per>=80){
//     console.log("b");
// }else if(per>=70){
//     console.log("c");
// }else if(per>=60){
//     console.log(d);
// }else if(per>=40){
//     console.log(e);
// }else{
//     console.log(f);
// }
// let x = readlineSync.questionInt("enter the total points scored ");
// if(x>=12){
//     console.log("yes");
// }else{
//     console.log("no");
// let n = readlineSync.questionInt("enter  the size of array ")
// arr = []
// for (i = 0; i < n; i++) {
//     arr[i] = readlineSync.questionInt("enter the element of array ")
// }
// for (i = 0; i < n; i++) {
//     for (j =(i+1); j < n; j++) {
//         if (arr[i] == arr[j]) {
//             console.log(arr[i]);
//         }
//     }

// }
// let n = readlineSync.questionInt("Enter the size of the array: ");
// let arr = [];
// for(i=0; i<n; i++){
//     arr[i]= readlineSync.questionInt("enter the element of array ")
// }
// for (let i = 0; i < n; i++) {
//     if(arr[i]%2==0){
//         console.log(arr[i]);
//     }
// }
let n = readlineSync.questionInt("enter the size of array ")
arr = [];
let p = 0;
for (i = 0; i <=n; i++) {
        if (n%i== 0) {
            arr[p]= i
            p++
        }
    }
console.log(arr);
