

// Destructuring

// The two most used data structures in JavaScript are Object and Array.

// Objects allow us to create a single entity that stores data items by key.
// Arrays allow us to gather data items into an ordered list.

// Although, when we pass those to a function, it may need not an object/array as a whole. It may need individual pieces.

// Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.

// Destructuring also works great with complex functions that have a lot of parameters, default values, and so on. Soon we’ll see that.

// // we have an array with the name and surname

let arr = ["Bilal", "Khan"]

// // destructuring assignment

// // sets firstName = arr[0]
// // and surname = arr[1]

// let [firstName, surname] = arr;
// its like 
// let firstName = arr[0];
// let surname = arr[1];

// // Now we can work with variables instead of array members.
// console.log(firstName); // Bilal
// console.log(surname);  // Khan



// // with array-returning methods

// let [first, second , third] = "I am a Student".split(' ');
// console.log(first); // I
// console.log(second);  // am


// Actually, we can use it with any iterable, not only arrays:

// let [a, b, c] = "abc"; // ["a", "b", "c"]
// console.log(a)
// let [one, two, three] = new Set([1, 2, 3]);



// let user = {};
// [user.name, user.surname] = "Ali sheikh".split(' ');

// console.log(user.name); // Ali
// console.log(user.surname); // sheikh
// console.log(user);


// swapping
// let guest = "Kamran";
// let admin = "Hasan";

// // // Let's swap the values: make guest=Hasan, admin=Kamran
// [guest, admin] = [admin, guest];

// console.log(`${guest} ${admin}`); // Hasan Kamran (successfully swapped!)

// // Usually, if the array is longer than the list at the left, the “extra” items are omitted.
// // Further items aren't assigned anywhere

// let [name1, name2] = ["Ali", "Fazal", "Bilal", "Yasir"];

// console.log(name1); // Ali
// console.log(name2); // Fazal



// // with rest operator (because we are collecting like array)

// let [name1, name2, ...rest] = ["Ali", "Fazal", "Bilal", "Yasir" , "Anzal"];

// // // rest is array of items, starting from the 3rd one
// console.log(rest[0]); // Bilal
// console.log(rest[1]); // Yasir
// console.log(rest.length); // 3



// // // with javaScript objects

// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200
//   };
  

//   let {title, width, height} = options;
  
//   console.log(title);  // Menu
//   console.log(width);  // 100
//   console.log(height); // 200

