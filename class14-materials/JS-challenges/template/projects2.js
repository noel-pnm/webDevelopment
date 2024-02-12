/* Project 1 Pseudo Code
1. User clicks on the list item.
2. Update the background color of the ul based on the list item being clicked.
Check the DOM and create an array of all elements with a class of 'pick'. For each element in the array, add an event listener.
When elements with a class of pick are "clicked", the function changeBackground will be called.
*/

// querySelectorAll will return an Array that meets to critera. I will then need to loop through the Array and add an event listener.
document.querySelectorAll(".pick").forEach(element => element.addEventListener('click', changeColor));
function changeColor(event){

        // Check the classList for whatever was clicked and return an object.
        const classList = event.target.classList;

        // Check if the Object contains a class of "color"
        const color = Object.values(classList).filter(each => each.includes('color'));

        // Reset the current ul class list, then add the color class
        document.querySelector('#bgColor').classList = "flex"
        document.querySelector('#bgColor').classList.add(color)
}

/* Project 2 Pseudo Code
    1. User inputs text into the form and clicks a button.
    2. The user's input is set to lowercase to eliminate case-sensitivity discrepencies.
    3. The entire string is checked for spelling correctness.
    4. The first three letters of the input are compared against the correct strings.
    5. If the input length and first three letters match the intended string, or if the spelling is completely correct, then will display feedback.
*/
document.querySelector('#submitDate').addEventListener('click', checkDate);

function checkDate(){
    const itinerary = {
        monday: 'boring',
        tuesday: 'class',
        wednesday: 'boring',
        thursday: 'class',
        friday: 'boring',
        saturday: 'weekend',
        sunday: 'weekend',
    }

    const dayOfWeek = document.querySelector('#day').value.toLowerCase();
    const dayArray = Object.keys(itinerary).filter(each => each.includes(dayOfWeek.substring(0,3)))
    document.querySelector('#userOutput').innerText = itinerary[dayArray]
}

/* Project 5 Pseudo Code
    1. Select initial temperature unit.
    2. Input initial temperature value.
    3. Submit request
    4. Perform mathematical conversion.
    5. Show user the converted temperature value and units.
*/

document.querySelector('#convertTemp').addEventListener('click',convert);
document.querySelectorAll('.tempUnitBtn').forEach(element => element.addEventListener('click', checked));

function checked(event){
    document.querySelectorAll('.tempUnitBtn').forEach(element => element.removeAttribute('checked'));
    event.target.setAttribute('checked', '')
}

function convert(){
    const unit = document.querySelector('input[name="radio"]:checked').value
    console.log(unit)   
    const initialTemp = document.querySelector('.numberInput').value;
    console.log(initialTemp)
    if (unit == "fahrenheit"){
        let newTemp = initialTemp*(9/5) + 32
        document.querySelector('#newTemperature').innerText = `${newTemp} ${unit}`;
    } else if (unit == "celcius"){
        let newTemp = (initialTemp - 32)*(5/9)
        document.querySelector('#newTemperature').innerText = `${newTemp} ${unit}`;
    }
}