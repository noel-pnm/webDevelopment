//---Easy
//create a function that subtracts two numbers and alerts the difference

function subtract(num1, num2) {
    let total = num1 - num2;
    alert(total)
}

//create a function that divides three numbers and console logs the quotient
function divide(num1, num2, num3) {
    let quotient = num1 / num2 / num3;
    console.log(quotient);
}

//create a function that multiplys three numbers and returns the product
function product(num1, num2, num3) {
    result = num1 * num2 * num3;
    return result
}

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function medium(num1, num2, num3){
    let sum = num1 + num2;
    sum = sum % num3
    console.log(sum);
}

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function hard(num1, num2, num3, num4){
    let result = num1 * num2;
    if (result > 100){
        result = result + num3 + num4;
        console.log(result);
    } else if (result < 100){
        result = result - num3 - num4;
        console.log(result);
    } else{
        result = result*num3 % num4;
        console.log(result);
    } 
}