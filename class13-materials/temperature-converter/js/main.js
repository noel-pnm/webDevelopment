//Write your pseduo code first! 
/* Pseudo Code for temperature converter

1. Request user to input a number in X units.
2. Take number and multiyply it by conversion factor to get Y units.
3. Display to user the number in Y units.

*/
document.querySelector('#submit').addEventListener('click', convert);

function convert() {
    let temp = document.querySelector('#inTemp').value
    temp = (temp*9/5) + 32
    // document.querySelector('#result').innerText = temp
    document.getElementById('result').innerText = temp
}