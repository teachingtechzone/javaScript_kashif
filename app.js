// kashif + hamza

// html
// CSS
// javascript
// bootstarp
// jquery
// php
// mysqli

// // 1. Ways to print in JavaScript
// // console.log("Hello World");
// // alert("me");
// // document.write("this is document write")

// // 2. Javascript console API
// console.log("Hello World", 4 + 6, "Another log");
// console.warn("this is warning");
// console.error("This is an error");

// // 3. JavaScript Variables
// // What are Variables? - Containers to store data values

// /*
// multi 
// line 
// commment
// */

// var number1 = 34;
// var number2 = 56;
// // console.log(number1 + number2);

// // 4. Data types in JavaScript
// // Numbers
// var num1 = "c";
// console.log(typeof(num1))
// var num2 = 56.76;

// // String
// var str1 = "This is a string";
// var str2 = 'This is also a string';

// // Objects
// var marks = {
//     arsal: 34,
//     ali: 78,
//     bilal: 99.977
// }
// console.log(marks.ali);

// // Booleans
// var a = true;
// var b = false;
// // console.log(a, b);

// // var und = undefined;
// var und;
// // console.log(und);

// var n = null;
// // console.log(n);
// /*
// At a very high level, there are two types of data types in JavaScript
// 1. Primitive data types: undefined, null, number, string, boolean, symbol
// 2. Reference data types: Arrays and Objects
// */

// var arr = [1, 2, "Kamran", 4, 5]
//     // console.log(arr[0])
//     // console.log(arr[1])
//     // console.log(arr[2])
//     // console.log(arr[3])
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element)

// }

// // Operators in JavaScript
// // Arithmetic Operators
// var a = 100;
// var b = 10;
// // console.log("The value of a + b is ", a+b);
// // console.log("The value of a - b is ", a-b);
// // console.log("The value of a * b is ", a*b);
// // console.log("The value of a / b is ", a/b);


// // Assignment Operators
// var c = b;
// // c += 2; // c = c + 2;
// // c -= 2; // c = c - 2;
// // c *= 2;
// // c /= 2;
// // console.log(c);

// // Comparison Operators
// var x = 34;
// var y = 56;
// // console.log(x == y);
// // console.log(x >= y);
// // console.log(x <= y);
// // console.log(x > y);
// // console.log(x < y);

// // Logical Operators

// // Logical and
// // console.log(true && true)
// // console.log(true && false)
// // console.log(false && true)
// // console.log(false && false)

// // Logical or
// // console.log(true || true)
// // console.log(true || false)
// // console.log(false || true)
// // console.log(false || false)

// // Logical not
// // console.log(!false);
// // console.log(!true);

// // Function in JavaScript
// function avg(a, b) {
//     c = (a + b) / 2;
//     return c;
// }
// // // DRY = Do not repeat yourself
// c1 = avg(4, 6);
// c2 = avg(14, 16);
// console.log(c1, c2);

// // Function in JavaScript
// function avg(a, b) {
//     c = (a + b) / 2;
//     console.log(c)
// }
// // // DRY = Do not repeat yourself
// avg(4, 6);
// avg(14, 16);


// // Conditionals in JavaScript
// /*
// var age = 41;
// // Single if statement
// if(age > 18){
//     console.log('You can drink pure water');
// }
// // if - else statement
// // if(age > 18){
// //     console.log('You can drink pure water');
// // }
// // else{
// //     console.log('You cannot drink pure water');
// // }

// age = 25;
// // if-else Ladder
// if (age > 32) {
//     console.log("Your age is greater than 32");
// } else if (age > 26) {
//     console.log("Your age is greater than 26");
// }
//  else if (age > 22) {
//     console.log("Your age is greater than 22");
// } 
// else if (age > 18) {
//     console.log("Your age is greater than 18");
// } else {
//     console.log("your age is less than 18");
// }
// console.log("End of ladder");

// var anynumber = "234"
// var strtoint = +anynumber;
// console.log(typeof(strtoint))

// var anynumber = "234"
// var strtoint = parseInt(anynumber);
// console.log(typeof(strtoint))

// if (2 === "2") {
//     console.log("they are equal")
// } else {
//     console.log("they are not equal")
// }



// var arr = [1, 2, 3, 4, 5, 6, 7];
// // console.log(arr);
// for (var i = 0; i < arr.length; i++) {
//     if (i == 2) {
//         // break;
//         console.log("inside for loop" + [i])
//         continue;
//     }
//     console.log("outside for loop" + [i])
// }

// var arr = [21, 2342, 663, 4564, 775, 446, 337];
// arr.forEach(function(element){
//     console.log(element);
// })
// pre and post increament
// var counter = 5;
// ++counter;
// counter++;
// console.log(counter);


// var counter = 5;
// console.log(++counter);
// console.log(counter++);
// console.log(counter);

// // const ac = 0;
// // ac++;
// // ac = ac +1;
// let j = 0;
// var arr = [21, 2342, 663, 4564, 775, 446, 337];
// while (j < arr.length) {
//     console.log(arr[j]);
//     j++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);




// // 4 may 2021 kashif hamza



// // // problem
// function looping() {

//     for (var i = 0; i < 6; i++) { // i should be exist in this block scope
//         console.log("inner loop" + i); // 1-5
//     }

//     console.log("outer loop" + i); // 1-5
// }

// console.log(i) // it should behave like this

// looping();
// // var -> function scope


// // solution es6-2015
// function looping() {

//     for (let i = 0; i < 6; i++) { // i should be exist in this block scope
//         console.log("inner loop" + i); // 1-5
//     }
//     // let i = 5;
//     console.log(i) // will throw error
// }
// looping();
// // console.log(i) // Obvisly it won't
// // // let -> block scope



// using constant
// const discount = 50;
// discount = 6;
// console.log(discount)



// // using let 
// let discount = 50;
// discount = 6;
// console.log(discount)


// let myArr = ["Fan", "Camera", 34, null, true];
// // // Array Methods
// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element)

// }
// // // console.log(myArr.length);
// console.log("------------")
// it will remove element from ending
// myArr.pop(); // permenently

// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element)

// }
// console.log(myArr.length)
// myArr.push("kashan")
// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element)

// }





// // it will remove element from starting
// myArr.shift()


// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element)

// }
// console.log(myArr.length)


// // it will add element at starting
// const newLen = myArr.unshift("Nihal")
// console.log(newLen);
// console.log(myArr);

// // // String Methods in JavaScript
// let mystring = "javaScript is a client side scripting language, Do you know javaScript? yes! it is.";
// // console.log(mystring.length)
// console.log(mystring.indexOf("good")) // will return -1
// console.log(mystring.indexOf("is")) // find first occurance
// console.log(mystring.lastIndexOf("is")) // find last occurance

//basic javaScript except let var const




// es5+ concepts
// Objects key value pair



// const person = {
//     name: "Ali",
//     talk() {
//         return "can talk";
//     }
// }


// console.log(person.name)
// person.name = "ahsan";
// console.log(person.name)
// console.log(person["name"])
// console.log(person.talk())
// console.log(person["talk()"]) // dont access method like this




// // this


// const person = {
//     name: "Ali",
//     talk() {
//         console.log(this); // return refrence of current object
//     }
// }

// // person.talk();


// // // now see the behavir

// const talk1 = person.talk; // reference to the function not called it
// // console.log(talk1)
// talk1();

// // if call function as method on object it will return refrence to that object
// // now if we call function as standalone or outside object this will return global object , the window object








// // Solution
// // note that every function in javaScript is an object




// const person = {
//     name: "Ali",
//     talk() {

//         console.log(this); // return refrence of current object

//     }
// }

// // // type dot to see all members and methods
// // person.talk. 

// // // now use bind method to solve this problem
// const talk2 = person.talk.bind(person) // :)

// talk2()


// third class start


// // insert Element at any position 
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "tomato"); // starting index, number of elements to delete, array of elements

// console.log(fruits);


// // insert Element at any position - delete example
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 1, "Lemon", "tomato"); // starting index, number of elements to delete, array of elements

// console.log(fruits);


// // replacing in string
// let mystring = "im learning javaScript"
// console.log(mystring.slice(1,4))
// d = mystring.replace("javaScript", "php");
// console.log(d)


// basic ended 

// es5+ started 












// // Arrow function

// const square = function(number) {
//     return number * number;
// }

// // console.log(square) // refrence to the function
// console.log(square(5)) // call the function



//  // remove the following things and add 
// // 1- function
// // 2- =>  fat arrow


// const square = (number) =>  {
//     return number * number;
// }

// console.log(square(5));


// // // if we have only single parameter exclude paranthesis

// const square = number =>  {
//     return number * number;
// }

// console.log(square(5))



// // // if body have single line then exclude
// // 1- curly braces 
// // 2- retrun 


// const square = number =>  number * number;


// // now see difference
// const square = function(number) {
//     return number * number;
// }

// // // if have zero parameter then empty paranthesis

// const square1 = () =>  5;

// const square = () =>  {
//     return "asdf" ;
// }


// console.log(square1())