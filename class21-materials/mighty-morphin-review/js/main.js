// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favoriteHoliday = "Christmas"
favoriteHoliday = "NEW YEAR"
// toUpperCase() is a method, not a property
console.log(favoriteHoliday.toUpperCase())

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let str = "New Year"
// alert(str.substring(str.length-3,str.length))
// alert(str.slice(-3))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function subtractFrom100 (n1, n2, n3, n4, n5){
    alert(Math.abs(100-n1-n2-n3-n4-n5))
}

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function lowHigh(n1,n2,n3){
    let min = Math.min(n1,n2,n3)
    let max = Math.max(n1,n2,n3)
    console.log(`min: ${min}, max: ${max}`)
    


}

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function HeadTails(){
    if (Math.random()*100 > 50){
        console.log("heads")
    }else {
        console.log("tails")
    }
}

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function multiFlip(n1){
    for (let i = 0; i < n1; i++){
        HeadTails()
    }
}