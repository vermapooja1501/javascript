const readlineSync = require ('readline-sync')
let n = readlineSync.questionInt("enter the size of array ")
arr = []
for(i=0; i<n; i++){
    arr[i]= readlineSync.questionInt("enter the element of array ")

}
let flag = 0;
for(i=0; i<n; i++){
    if(arr[i]<arr[i-1]){
        flag =1
        break;
    }
}
if(flag==1){
    console.log("NO");
}else{
    console.log("YES");
}