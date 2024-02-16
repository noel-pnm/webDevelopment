//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements

function createArray(n){
    let array = []
    for (let i = 1; i <= n; i++){
        array[i-1] = i
    }
    console.log(array)
}

