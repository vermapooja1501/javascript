// const readlineSync = require ('readline-sync')

let str = "ABC"
let n = str.length;

for(let i=0; i<n; i++){
    for( let j=0; j<n; j++){
        if(j==i)
             continue;

        for( let k=0; k<n; k++){
            if(k==i || k==j) 
                continue;

            console.log(str[i],str[j],str[k]);
        }
    }
}

