// Sum of values
// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).
sumOfValues()
console.log("\n")

function sumOfValues (){
    const values = [3, 11, 7, 2, 9, 10];
    let sum = values.reduce((acc, c) => acc + c, 0)
    console.log(sum);
}

// Array maximum
// Write a program that creates the following array, then calculates and shows the array's maximum value.
arrayMaxSpread()
arrayMaxReduce()
console.log("\n")

function arrayMaxSpread(){
    const values = [3, 11, 7, 2, 9, 10];
    console.log(Math.max(...values))
}


function arrayMaxReduce(){
    const values = [3, 11, 7, 2, 9, 10];
    let output = values.reduce((acc, c) => acc > c ? acc : c, 0)
    console.log(output)
}


// Write a program that:
musketeers()
console.log("\n")

function musketeers(){
    // Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
    // Shows each array element using a for loop.
    let arr = ["Athos", "Porthos", "Aramis"]
    for (i=0; i < arr.length; i++ ){
        console.log(arr[i]);
    }
    // Adds the "D'Artagnan" value to the array.
    console.log("\n")
    arr.push("D'Artagnan")
    // Shows each array element using the forEach() method.
    arr.forEach(element => console.log(element))
    // Remove poor Aramis.
    console.log("\n")
    let arr2 = arr.filter(element => element !== "Aramis")
    for (element of arr2){
        console.log(element)
    }
}

// List of words
// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".
function ListWords(){
    let wordArray = new Array
    while (true){
        let word = prompt("please type a word!");
        if (word.toLowerCase() === "stop"){
            break;
        }
        wordArray.push(word)
    }
    console.log(wordArray)
}