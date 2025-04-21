// let arr = [2, 3, 4];
// arr.forEach(function (element, index, arr) {
//(method) Array<number>.forEach(callbackfn: (value: number, index: number, array: number[]) => void, thisArg?: any): void
// Performs the specified action for each element in an array.

// @param callbackfn — A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

// @param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
//   console.log(index, element, arr);
// });

//aarow function

// const heros = ["amrish", "sunney doul", "mitthun", "Akashay kumar"];
// heros.forEach((el) => {
//   console.log(el.toLowerCase());
// // });
// let hs = ["amrish", "sunney doul", "mitthun", "Akashay kumar"];
// let lowerCaseHeros = hs.map((el) => el.toLowerCase());
// console.log(el.lowerCaseHeros);

// Shopping Cart

// const CartBill = [20, 30, 40];
// const sumofCartBill = CartBill.reduce((prev, curr) => prev + curr, 0);
// console.log(sumofCartBill);

// game Schore

// const gamescore = [10, 1000, 2000, 3000, 44400];
// // check if the all value are numbers
// console.log(typeof gamescore[1]);
// const gamescorecheck = gamescore.every(() => typeof v === Number);
// console.log("check :", gamescorecheck);

// // Find  Score above 200

// const above200 = gamescore.find((score) => score > 200);
// console.log(above200);

//findIndex====>

// const arrfindindex = [1, 2, 3, 0, 5];
// // const isLargeNumber = (Element) => Element > 10;
// // console.log(arrfindindex.backtrackin(isLargeNumber));

// // some;

// const even = (element) => element % 2 === 0;
// console.log(arrfindindex.some(even));

// sort;

const mahina = ["january ", "febaruary ", "March ", "april ", "May "];
mahina.sort();
console.log(mahina);

// const months = ["March", "Jan", "Feb", "Dec"];
// months.sort();
// console.log(months);
