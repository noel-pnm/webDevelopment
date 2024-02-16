//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
let array = [1, 2, 3, 4, 5]

function multiplyArrayElements(array){
    let product = 1;
    array.forEach(element => {product *= element})
    console.log(product)
}
