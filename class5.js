
// with function

// // lets create simple function to add 3 numbers

// function sum(num1, num2 , num3) {
//     return num1+ num2 + num3 ;
// }


// console.log(sum(1,2,3))














// // If we had an array that we wanted to pass as a list of arguments in a function
// function sum(num1, num2 , num3) {
//     return num1+ num2 + num3 ;
// }

// let params = [1,2,3];
// console.log(sum(params)) // i got 1,2,3undefinedundefinedd //failed




// // solution spread operator
// function sum(num1, num2 , num3) {
//     return num1+ num2 + num3 ;
// }

// let params = [1,2,3];
// console.log(sum(...params))




// rest operator
// rest parameters collect all the remaining elements into an array


// // // lets add multiple arguments
// function add(x, y) {
//     return x + y;
//   }
  
// console.log(add(1, 2, 3, 4, 5)) // returns 3

// function add(...args) {
//     let result = 0;
  
//     for (let arg of args) result += arg;
  
//     return result
//   }
  
// console.log(add(1)) // returns 1
// console.log(add(1,2)) // returns 3 [1,2]
// console.log(add(1,2,3,4,5)) // returns 5
// Note: Rest parameters have to be at the last argument. 
// This is because it collects all remaining/ excess arguments into an array. 


// // a+= b; a = a + b
// function abc(a, ...b, c) {
//     let result = 0;
  
//     for (let arg of b) result += arg; // result = result + arg // result = 0 + 2 ,  result = 2 + 3 ,
//     return result + a + c ;
//   }

// // console.log(abc(1,2,3,4,5)) // Uncaught SyntaxError: Rest parameter must be last formal parameter
// function abc(a, c , ...b) {
//     let result = 0;
//     console.log("a",a)
//     console.log("b",b)
//     console.log("c",c)
//     for (let arg of b) result += arg;
//     return result + a + c;
//   }

// console.log(abc(1,2,3,4,5)) 


// // // Observe the sequence
// function xyz(x, y, ...z) {
//     console.log(x, ' ', y); // A B
  
//     console.log(z); // ["C", "D", "E", "F"]
//     console.log(z[0]); // C
//     console.log(z.length); // 4
//   }
  
//   xyz("A", "B", "C", "D", "E", "F")



// // // Map operator
// function xyz(x, y, ...z) {

  
//     return z.map( (elem) => `${elem} is a letter `)

//   }
  
//   console.log(xyz("A", "B", "C", "D", "E", "F"))

// // // filter operator
// function xyz(x, y, ...z) {

  
//     return z.filter( (elem) => elem == "F" )

//   }
  
// console.log(xyz("A", "B", "C", "D", "E", "F"))




// Before rest parameters existed, to get all the arguments in a function
// // we used arguments which is an array-likeobject.

// function someFunction() {
//     return arguments;
//   }

// console.log(someFunction("bilal", 100, false))

// The downside of using the arguments keyword is that,
// it returns an array-like object; this means you essentially
// cannot perform any array-methods like; Array.filer, Array.map




// With rest parameters we can gather any number of arguments into an array 
// and do what we want with them


// The spread operator allows us to expand elements.
// With rest parameters we were able to get 
// a list of arguments into an array


// ... could be used to represent either a spread operator or
// a rest parameter. How do we tell the difference? Well it entirely
//  depends on how we use it. 