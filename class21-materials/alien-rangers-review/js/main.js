//Arrays

//Create and array of tv shows. Loop through and print each show to the console
function loopTv(){
    let tvArray = ['show1','show2', 'show3'];
    tvArray.forEach(element => {console.log(element)})
}

loopTv()

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

function loopEven(){
    let numberArray = [1,2,3,4,5]
    let even = numberArray.filter(element => element % 2 == 0)
    console.log(even)
}

loopEven()


//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function sumLowHigh(){
    let arr = [1,2,3,4,5]
    let sort = arr.sort((a,b) => a-b)
    let sum = sort[1] - sort[sort.length-1]
    return sum
}

sumLowHigh()

