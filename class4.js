// console.log("class 4th")


// // // using of map since es5
// let colors = ["red" , "green" , "blue"];

// let modified = []; // to store modified colors
// let modify = 0;
// for (let i = 0; i < colors.length; i++) {
//     modify = colors[i] + " is a color name"
//     modified.push(modify);
// }

// console.log(modified);



// // using map

// let colors = ["red" , "green" , "blue"];
// modified = colors.map(function(color) {
//     return  color + " is a color name"
// })
// console.log(modified)



// let numbers = [2 , 5 , 6];
// square = numbers.map(function(num) {
//     return  num * num ;
// })
// console.log(square)


// // // clean approach
// let colors = ["red" , "green" , "blue"];

// modified = colors.map((color) => color + " is a color name") ;
// console.log(modified)



// // // template literal more clean

// let colors = ["red" , "green" , "blue"];


// modified = colors.map((color) => `${color} is a color name`) ;
// console.log(modified)



// // iterate over Object 
let marks = {
    arsal: 34,
    ali: 78,
    bilal: 99.977,
    myname : "ali"
}

// JSON language independant data transfer format

// let marks = {
//     "arsal": 34,
//     "ali": 78,
//     "bilal": 99.977,
//     "myname" : "ali"
// }



// // ES6 same way to access object or json data
// Object.keys(marks).forEach(key => {
//     console.log(key + ' - ' + marks[key]) // key - value
// })


// // ES7
// Object.entries(marks).forEach(([key, value]) => {
//     console.log(key + ' - ' + value) // key - value
// })



// // for each for array 
// let animals = ['dog', 'cat', 'hen'];
// animals.forEach(function(currentValue, index, array) {
//     // Do something with currentValue or array[index]
//     if(currentValue == "dog"){
//         console.log("cute dog");
//     }
//     // console.log("current" + currentValue , "index" + index , "arry " + array)
//   });






// // json to obj , obj to json 

// console.log(marks)

// JSON.stringify(obj) // json to obj
// JSON.parse(data1) // obj to json





// // special types of for loop 

// // for array 
// let myarray = [2,445,643,6436]

// for (let value of myarray) {
//     // do something with value
//     console.log(value)
//   }

// myobj = {
//     name : "kashan",
//     age : "20"

// }
// //   for object 
//   for (let property in myobj) {
//     // do something with object property
//     console.log(property)
//   }



// spread operator 


// let array1 = ["Apple" , "Mango" , "Banana"];
// let array2 = ["Tomato" , "Onion" , "Potato"];

// let combinedarray = array1.concat(array2); // here we use a function
// console.log(combinedarray);









// // what if i do | not a solution
// let array1 = ["Apple" , "Mango" , "Banana"];
// let combinedarray = [array1 , "Tomato" , "Onion" , "Potato"];

// console.log(combinedarray); // i got nested array












// // // solution

// let array1 = ["Apple" , "Mango" , "Banana"];
// let combinedarray = [...array1 , "Tomato" , "Onion" , "Potato"]; // using spread operator

// console.log(combinedarray) 


// // or 

// let array1 = ["Apple" , "Mango" , "Banana" , "Guava"];
// let array2 = ["Tomato" , "Onion" , "Potato"];

// let combinedarray = [...array1 , ...array2 , "Cabbage"] // using spread operator

// console.log(combinedarray)





// // with objects

// const personName = {name : "Ali"}
// const job = {job : "web developer"}

// const combined = {...personName , ...job , Location : "Pakistan"}
// console.log(combined)
