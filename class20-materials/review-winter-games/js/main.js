//Create a function that takes in an array of numbers. 
// Return a new array containing every even number from the original array (do not use map or filter)

function createArray(n){
    let array = []
    array.length = n;
    for (let i = 1; i <= n; i++){
        array[i-1] = i
    }
    return array
}

function evenArray(arg){
    let i = 0;
    let newArray = []
    arg.forEach((element) =>{            
        if (element % 2 == 0){
            newArray[i] = element            
            i++;
        }
    })
    console.log(newArray)
}

// function evenArray(arg){
//     let evenCounter = 0
//     arg.forEach((element) => {
//         if (element % 2 == 0){
//             evenCounter += 1;
//         }
//     })
//     console.log(evenCounter)
// }