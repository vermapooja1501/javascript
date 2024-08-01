const readlineSync = require('readline-sync');
// function navigateDirection() {
// let direction = readlineSync.question("enter the direction(N,S,E,W): " ).toUpperCase();
// if (direction == 'N') {
//     console.log("YOU ARE MOVE NORTH");
// } else
//     if (direction =='S') {
//         console.log("YOU ARE MOVE SOUTH");
//     } else
//         if (direction =='E') {
//             console.log("YOU ARE MOVE EAST");
//         } else
//             if (direction =='W') {
//                 console.log("YOU ARE MOVE WEST");
//             } else {
//                 console.log("invalid direction");
//             }
//         }
//         navigateDirection()
// question 2
// let object = {id: 12345 ,city: "mumbai"}
// let object1 = object;
// console.log(object1);
// console.log("orginial",object);
function aditemtocart(carditem, newitems){
    // const exisitingitemindex = carditems.findIndex(item => item.id === newitems.id);
    if(exisitingitemindex>=0){
        carditems[exisitingitemindex].quantity+=newitem.quantity;
    }else{
        carditem.push(newitems);
    }
    return carditems;
}
    const carditems = [
        { id: 1, name: "Phone", price: 20000, quantity: 1 },
        { id: 2, name: "Headphones", price: 5000, quantity: 2 },
        { id: 3, name: "Power Bank", price: 1000, quantity: 1 }
    ]
    console.log("Cart before adding new item:", carditems);
console.log("Cart after adding new item:", updatedCart);
