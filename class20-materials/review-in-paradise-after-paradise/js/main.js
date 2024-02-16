// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". 
// If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

let numbers = [1, 2, 3, 4, 5]
let numbers2 = [5, 4, 3, 2, 1]
let numbers3 = [2, 2]

function hiBye (array){
    let length = array.length;
    if (array[0] < array[length-1]){
        alert("Hi")
    } else if (array[0] > array[length-1]){
        alert("bye")
    } else 
        alert("we close in an hour")
}
