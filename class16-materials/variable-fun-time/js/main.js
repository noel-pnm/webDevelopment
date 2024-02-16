//--- Easy
//create a variable and assign it a number
let num = 100;

//minus 10 from that number
num -= 10;

//print that number to the console
console.log(num);

//--- Medium
//create a variable that holds a value from the input
let inputNum = document.querySelector('#danceDanceRevolution').value

//add 25 to that number
inputNum += 25

//alert that number
alert(inputNum)

//--- Hard
//create a variable that holds the h1
const holderH1 = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables

holderH1.addEventListener('click',sumTwo)

function sumTwo(){
    let sum = num + Number(inputNum);
    console.log(sum)
}