// // Translate border-left-width to borderLeftWidth
// // importance: 5
// // Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// // That is: removes all dashes, each word after dash becomes uppercased.

// // Examples:

// // camelize("background-color") == 'backgroundColor';
// // camelize("list-style-image") == 'listStyleImage';
// // camelize("-webkit-transition") == 'WebkitTransition';

strCamelize("background-color")

function strCamelize(str){
    // convert string into an array, delimited by "-"
    return str
        .split('-')
        .map((element, index) => index == 0 ? element : element[0].toUpperCase() + element.slice(1))
        .join('')
}

// /*****************************************************/
// // Filter range
// // importance: 4
// // Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
// return an array where a <= x <= b
// // The function should not modify the array. It should return the new array.

// // For instance:

// // let arr = [5, 3, 8, 1];

// // let filtered = filterRange(arr, 1, 4);
// // alert( filtered ); // 3,1 (matching values)
// // alert( arr ); // 5,3,8,1 (not modified)

filterMe([5,3,8,1],1,4)

function filterMe(arr, a, b){
    let filter = arr.filter(element => a <= element && element <= b)
    return `The original array isL ${arr} \nThe filtered array is ${filter}`;
}
// The filter() method returns a new array

/*****************************************************/
// Filter range "in place"
// importance: 4
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. 
// The test is: a ≤ arr[i] ≤ b.
// The function should only modify the array. It should not return anything.
// For instance:
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
// alert( arr ); // [3, 1]

// array.splice(start, deleteCount, addItem1, addItem2)

filterRangeInPlace([5,3,8,1,4,2,2,2],1,4)

function filterRangeInPlace(arr,a,b){
    arr.forEach((element, index) => {
        element >= a && element <= b ? "" : arr.splice(index,1);
    })
    return arr
}

// Take forEach() method will move through the array, passing the current element and index into the callback function. 
// When the callbackfn is false, it will delete the current value at the current index from the array.

/*****************************************************/
// Sort in decreasing order
// importance: 4
// let arr = [5, 2, 1, -10, 8];
// alert( arr ); // 8, 5, 2, 1, -10
sortDecreasingOrder([5, 2, 1, -10, 8])
function sortDecreasingOrder(arr){
    arr.sort((a,b) => (b-a))
    return arr
}
// The function uses the sort method() and apply the known algorithm

// /*****************************************************/
// Copy and sort array
// importance: 5
// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
// Create a function copySorted(arr) that returns such a copy.
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)

copyAndSortArr(["HTML", "JavaScript", "CSS"])

function copyAndSortArr(arr){
    // Use the spread syntax to create a copy of the array
    let sorted = arr.slice()
    // let sorted = [...arr]
    sorted.sort()
    return sorted, arr
}

// /*****************************************************/
// Create an extendable calculator
// importance: 5
// Create a constructor function Calculator that creates “extendable” calculator objects.

// The task consists of two parts.
// First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.
// Usage example:
// let calc = new Calculator;
// alert( calc.calculate("3 + 7") ); // 10
// Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

// For instance, let’s add the multiplication *, division / and power **:

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// No parentheses or complex expressions in this task.
// The numbers and the operator are delimited with exactly one space.
// There may be error handling if you’d like to add it.

// Object Constructor Function
function MakeMouse (mouseColor, mouseType, mouseSize, diseasedStatus) {
    this.color = mouseColor
    this.type = mouseType
    this.size = mouseSize
    this.diseased = diseasedStatus
    // this.bluetooth = true
    this.run = function(){}
    this.hide = function(){}
    this.eat = function(){}
}

let mickey = new MakeMouse('Black', 'Cartoon', 'Life Sized', true)


// /*****************************************************/
// Map to names
// importance: 5
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = /* ... your code */

// alert( names ); // John, Pete, Mary
// /*****************************************************/
// Map to objects
// importance: 5
// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// For instance:

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = /* ... your code ... */

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith
// So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.

// /*****************************************************/
// Sort users by age
// importance: 5
// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// sortByAge(arr);

// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete

// /*****************************************************/
// Shuffle an array
// importance: 3
// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. For instance:

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...
// All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.
// /*****************************************************/
// Get average age
// importance: 4
// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// The formula for the average is (age1 + age2 + ... + ageN) / N.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
// /*****************************************************/
// Filter unique array members
// importance: 4
// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:

// function unique(arr) {
//   /* your code */
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(strings) ); // Hare, Krishna, :-O
// /*****************************************************/
// Create keyed object from array
// importance: 4
// Let’s say we received an array of users in the form {id:..., name:..., age:... }.

// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

// For example:

// let users = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ];

// let usersById = groupById(users);

// /*
// // after the call we should have:

// usersById = {
//   john: {id: 'john', name: "John Smith", age: 20},
//   ann: {id: 'ann', name: "Ann Smith", age: 24},
//   pete: {id: 'pete', name: "Pete Peterson", age: 31},
// }
// */
// Such function is really handy when working with server data.

// In this task we assume that id is unique. There may be no two array items with the same id.

// Please use array .reduce method in the solution.
// /*****************************************************/