
// Exercise - 1
// Write a JavaScript function that reverse a number.
// Sample Data and output:
// Example x = 32243;
// Expected Output : 34223

// let reverse_num=(x) =>  x.split("").reverse().join("");
// console.log(reverse_num("123456789"));



// Exercise - 2
// Write a JavaScript function that returns a passed string with letters in 
// alphabetical order.
// Example string : 'webmaster'
// // Expected Output : 'abeemrstw'

// let sort_num=(x)=> x.split("").sort().join("");
// console.log(sort_num("webmaster"));



// Write a JavaScript function that accepts a string as a parameter and counts the 
// number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do 
// not count 'y' as vowel here.
// Sample Data and output:
// Example string : 'The quick brown fox'
// Expected Output : 5

// ##########################################################################
// // no need to write aeiou in upper case, because you are using i parameter for case insentive
// let Count = (x) => x.match(/[aeiou]/gi).length
// console.log("Numer of vowel is" + "=" + Count("The quick brown fox"));
// ##########################################################################



// Exercise - 4
// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

// let update=(x) =>  [d.getDate(), d.getMonth()+1, d.getFullYear()].join(x);
// let d = new Date();
// console.log(update('-') + '       ' + update('/'));

// ##########################################################################
// let d = new Date(); // first initiate than use
// let b = [d.getDate() , d.getMonth() + 1 , d.getFullYear()]
// console.log(b.join("-"))

// ##########################################################################


// Exercise - 5
// // Write a JavaScript program that accept two integers and display the larger.

// let large = (num1 , num2)=> { if( num1 >= num2) return num1; return num2;}

// console.log(  "Greatest number is" + '   ' + large (prompt("Enter First Number") , prompt("Enter second Number")))




// Exercise - 6
// Write a JavaScript conditional statement to find the sign of product of three numbers. Display an console.log box 
// with the specified sign.
// Sample numbers : 3, -7, 2
// Output : The sign is -

// ##########################################################################
// condition faild on following pattern

// let x=3, y=7, z=-2;
// let x=-3, y=-7, z=-2;
// let x=-3, y=-7, z=-2;

// let x=-3, y=7, z=-2;
// if(x>0 && y<0 && z>0){
//     console.log("The Sign is  -");
// }
// else {console.log("The sign is +");}

// ##########################################################################



// Exercise - 7
// Write a JavaScript function to check whether an `input` is an array or not.

// let check = (x) => Array.isArray(x);
// console.log(check([1,2,3]));
// console.log(check("1,2,3"));



// Exercise - 8
// Write a simple JavaScript program to join all elements of the following array into 
// a string.
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

// let Array=["Red","Green", "White", "Black"];
// console.log(Array.join() + '\n' + Array.join() + '\n' + Array.join('+'));



// Exercise - 9
// Write a JavaScript conditional statement to find the largest of five numbers. 
// Display an console.log box to show the result.
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0

// ##########################################################################

// let a=-80, b=-11, c=-10, d=-10, e=-50;
// let num=Math.max(a,b,c,d,e);
// console.log(num)
// if(num>=0 || num<=0){
//     console.log("The Largest number is"+' '+num);
// }
// else{
//     console.log("All Egual"); // this condition never run
// }


// // for this task you should build algo like this
// let Arr = [1, 7, 2, 8, 3, 4, 5, 0, ,23466,99999999,234,9];

// for (let i = 1; i < Arr.length; i++){ 

//     // console.log(Arr[i] , "----------outer loop--------") // 7

//     for (let j = 0; j < i; j++){
//         // console.log(Arr[j] ,  "----------inner loop--------") // 1

//         if (Arr[i] < Arr[j]) {  // Arry[i] = 7 < Arry[j] = 1
//           let x = Arr[i];
//           Arr[i] = Arr[j];
//           Arr[j] = x;
//         }
//     }
//     }

  
// console.log(Arr[Arr.length - 1]);

// ##########################################################################




// Exercise - 10
// Write a JavaScript function to remove specified number of characters from a 
// string.
// Test Data :
// document.write(truncate_string("Amjad Ali",4));
// "Amja"

// document.write(truncate_string("Amjad Ali",4));


// function truncate_string(input, end)
// {
// start = 0;
// return (input.substr(start, end))
// }