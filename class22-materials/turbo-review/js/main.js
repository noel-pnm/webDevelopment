// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = " Diet Coke "
// option 1
console.log(favDrink.trim());
// Option 2 - Join all elements of an array with no space ("") between them.
// let arr = favDrink.split('')
// if (arr[0] == ' '){
//     arr.shift()
// }
// if (arr[arr.length-1] == ' '){
//     arr.pop()
// }
// console.log(arr.join(""));

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let multiString = "Hello World I Love Apple Juice"
// let arr2 = multiString.split(' ')
// // arr2.forEach(element => element.toLowerCase() === "apple" ? console.log("True") : "false" )

multiString.toLowerCase().search('juice') !== -1 ? console.log("in the string") : ""

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rps(){
    // Option 1
    // let random = Math.random()
    // if (random < .333){
    //     return "rock";
    // } else if (random < .666){
    //     return "paper";
    // } else{
    //     return "scissor";
    // }

    // Option 2
    let choices = ["rock", "paper", "scissor"]
    return choices[Math.floor(Math.random()*choices.length)]
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function game(choice){
    choice = choice.toLowerCase()
    bot = rps()
    if (choice === "paper" && bot === "scissor"){
        console.log("lose");
    } else if(choice === "paper" && bot === "rock"){
            console.log("win");
    } else if (choice === "paper" && bot === "paper"){
        console.log("tie");
    } 
    
    else if (choice === "rock" && bot === "scissor"){
        console.log("win");
    } else if (choice === "rock" && bot === "rock"){
        console.log("tie");
    } else if(choice === "rock" && bot === "paper"){
        console.log("lose");
    } 
    
    else if (choice === "scissor" && bot === "scissor"){
        console.log("tie");
    } else if (choice === "scissor" && bot === "rock"){
        console.log("lose");
    } else if(choice === "scissor" && bot === "paper"){
        console.log("win");
    }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function choiceArr(n){
    let emptyArray = new Array(n)
    let newArray = emptyArray.fill(1).map(() => (rps()))
    return newArray
}

function multiGame (arr){
    arr.map(element => game(element))
}

console.log(multiGame(choiceArr(5)))