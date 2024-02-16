//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too

document.querySelector('h1').addEventListener('click', ageCheck)

function ageCheck(){
    let output = document.querySelector('p')
    let compare = Number(document.querySelector('#danceDanceRevolution').value)
    // Using .value will look at what the user writes into the form

    if (compare < 16){
        output.innerText = 'they can not drive'
    } else if (compare < 18){
        output.innerText = "they can't hate from outside the club, because they can't even get in"       
    } else if (compare < 21){
        output.innerText = 'they can not drink'
    } else if (compare < 25){
        output.innerText = 'they can not rent cars affordably'
    } else if (compare < 30){
        output.innerText = 'them they can not rent fancy cars affordably'
    } else if (compare > 30){
        output.innerText = 'there is nothing left to look forward too'
    }
}