const readlineSync = require('readline-sync');
let fee = readlineSync.question("enter a number n ")
let charge;
if (fee <= 2) {
    parkingFee = fee * 20
} else if (fee <= 5) {
    parkingFee = 2 * 30 + (fee - 2) * 20
} else {
    parkingFee = 2 * 30 + (3 * 20) + (fee - 5) * 25
}
console.log(parkingFee)