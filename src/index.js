// 1. Introduction to Higher Order Functions
// Callback function definition

// - Create a function called `callback` that `console.log`s the message "Callback Function".


const callback = () => {
  console.log("Callback function");

};


// Higher Order Function definition

//- Create a function called `higherOrder` that takes a parameter called `foo`. Inside the `higherOrder` function, 
// `console.log` the message "Higher Order Function", and then invoke `foo()` by returning it.

const higherOrder = (foo) => {
  
  console.log("Higher Order Function");
  return foo();

};


// Pass the Higher Order Function the Callback function as an argument

higherOrder(callback);



// Example data for 2 and 3
const brunchMenu = [
  "eggs benedict",
  "huevos rancheros",
  "fried chicken & waffle",
  "fried egg sandwich",
];

const brunchPrices = [15.0, 16.0, 18.0, 12.0];



// 2. Built-in Higher Order Functions

// Map - "Transforms" each item in the array and returns a new array

/*


- Create a variable called `uppercaseMenu` and set it to `brunchMenu.map`.
- Inside the parentheses `()`, write an anonymous arrow function that takes a parameter `menuItem` and returns `menuItem.toUpperCase()`.

- Log `uppercaseMenu` to the console and view it to confirm that a new array was created where the brunch menu items are transformed to uppercase.


*/

const uppercaseMenu = brunchMenu.map((menuItem) => menuItem.toUpperCase());

console.log(uppercaseMenu);

// Filter - Returns a new array with items that pass the condition in the callback
/*

3. Use JavaScript Built in Higher Order Function Filter

- Create a variable called `cheaperMenuPrices` and set it to `brunchPrices.filter`.

- Inside the parentheses `()`, write an anonymous arrow function that takes a parameter `price` and returns `true` if the `price` is under 17.

- Log `cheaperMenuPrices` to the console and view it to confirm that a new array was created with every price under 17.

*/


const cheaperMenuPrices = brunchPrices.filter((price) => price < 17);


console.log(cheaperMenuPrices);
