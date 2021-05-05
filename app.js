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