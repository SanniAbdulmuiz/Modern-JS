// import { addToCart, totalprice as price, tq } from './shoppingcart.js';

// addToCart('bread', 5);
// console.log(price, tq);

console.log('Import Module');
// //console.log(shippingCost); //Doesn't work like this, it has to be exported first

// import * as shoppingcart from './shoppingcart.js'; //Importing all the exports of the shopping cart module, all at the same time
// shoppingcart.addToCart('bread', 5);

// console.log(shoppingcart.totalprice); //We should not import the same module twice!!

//import add, { addToCart, totalprice as price, tq } from './shoppingcart.js'; //Don't mix name and default import togther in real life projects
import add, { cart } from './shoppingcart.js'; //This will import the default export in the shopping cart module

add('Pizza', 5);
add('bread', 5);
add('apple', 5);
console.log(cart);

// //////////////////////////////////////
// // The Module Pattern

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
//     );
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 2);
// console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost);

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'Bread', quantity: 5 },
    { product: 'Pizza', quantity: 5 },
  ],
  user: { LoggdIn: true },
};
const stateClone = Object.assign({}, state); //i.e: We use "Object.assign" to create a copy of an object
const stateClonDeep = cloneDeep(state);
state.user.LoggdIn = false;
console.log(stateClone);
console.log(stateClonDeep);
