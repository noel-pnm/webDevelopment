// *Variables*
// Create a variable and console log the value
let variable = 0 
console.log(variable)

// Create a variable, add 10 to it, and alert the value
variable += 10
console.log(variable);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtract4(n1, n2, n3, n4){
    alert(n1-n2-n3-n4)
}

// Create a function that divides one number by another and returns the remainder
function mod(n1, n2){
    return n1 % n2
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwo (n1, n2){
    if (n1+n2 > 50){
        alert("Jumanji")
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThree (n1, n2, n3){
    if (n1*n2*n3 % 3 == 0){
        alert("Zebra")
    }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function wordNum(string,number){
    number = Number(number)
    for (let i = number; number > 0; i--){
        console.log(string)
    }
}