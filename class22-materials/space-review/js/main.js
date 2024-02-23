//Arrays
//Create and array of numbers. Sum all of the numbers. Alert the sum.
 function createRandomArr(n){
    let arr = new Array(n)
    let newArray = arr.fill(1).map(element => element = Math.floor(Math.random()*100))
    return newArray
}

function sumArray(arr){
    // let sum = 0;
    // arr.forEach(element => sum += element)
    // return sum
    let output = arr.reduce((acc, c) => acc + c, 0)
    return output
}

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function originalSquared (arr){
    console.log(arr);
    let unique = arr.filter((element, index) => arr.indexOf(element) === index)
    return unique.map(element => Math.pow(element, 2))
}

//Create a function that takes string
//Print the reverse of that string to the console

function reverseStr (str){
// Use the String.split() method to convert the string into an Array, delimited by no spaces ('')
// In a loop, pop the first index of an array and unshift it into a new array.
    let output = new Array
    let input = str.split('')
    let length = input.length
    for (let i = 0; i < length; i++){
        output.unshift(input.shift())
    }
    return output.join('')
}

// This does not work as the shift() method will change the indicies that the forEach method will move through.
// function alternateReverse(str){
//     let arr = str.split('') // create an array with each letter in the string.
//     arr.forEach( (element, index) => console.log(element, index, arr.shift()))

// }

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function checkPalindrome (str){
    if (str === reverseStr(str)){
        console.log("this is a palindrone")
    } else{
        console.log("not a palindrome");
    }
}