const readlineSync = require('readline-sync')
// function addItem(){
// let n = readlineSync.questionInt("enter the size of array ")
// cartitems = []
// for(i=0; i<n; i++){
//     let id = readlineSync.questionInt("enter the id number ");
//     let name = readlineSync.question("enter the name ");
//     let price = readlineSync.questionInt("enter the price ");
//     let quantity = readlineSync.questionInt("enter the quantity ")
//       cartitems.push({id,name,price,quantity});  
// }
// let removeitems = readlineSync.questionInt("enter the id of the item ")
// if(removeitems!==-1){
//     cartitems= cartitems.filter(item => item.id !== removeitems);
   
// }
// console.log(cartitems);
// }
// addItem()
// function addItem() {
//     let n = readlineSync.questionInt("Enter the size of array: ");
//     let cartitems = [];

//     for (let i = 0; i < n; i++) {
//         let id = readlineSync.questionInt("Enter the id number: ");
//         let name = readlineSync.question("Enter the name: ");
//         let price = readlineSync.questionInt("Enter the price: ");
//         let quantity = readlineSync.questionInt("Enter the quantity: ");
//         cartitems.push({ id, name, price, quantity });
//     }

//     console.log("Cart items before removing:");
//     console.log(cartitems);

//     let removeItems = readlineSync.questionInt("Enter the id of the item to remove from the cart (or -1 to stop): ");
//     while (removeItems !== -1) {
//         cartitems = cartitems.filter(item => item.id !== removeItems);
//         removeItems = readlineSync.questionInt("Enter the id of the item to remove from the cart (or -1 to stop): ");
//     }

//     console.log("Cart items after removing:");
//     console.log(cartitems);
// }

// addItem();
constperson = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
console.log(constperson.id);
console.log(constperson.firstName);
