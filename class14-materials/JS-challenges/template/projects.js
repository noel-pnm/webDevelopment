// Project 1 Pseudo Code
// 1. User clicks on the list item.
// 2. Update the background color of the ul based on the list item being clicked.
// Check the DOM and create an array of all elements with a class of 'pick'. For each element in the array, add an event listener.
// When elements with a class of pick are "clicked", the function changeBackground will be called.
document.querySelectorAll(".pick").forEach(element => element.addEventListener('click', checkColor));
function checkColor(event){
    // Based on the element that was clicked, create an object containing the class list of the clicked element. 
    const hasColorClass = event.target.classList;

    // Take the object, and create an array containing the property values.
    const classArray = Object.values(hasColorClass);

    // Check what color the array contains and assign it to the variable newColor
    const newColor = classArray.filter(each => each.includes('color'))[0]; 
    console.log(newColor);

    // Reset, then change the  the background color
    document.querySelector('#bgColor').classList = 'flex';
    changeColor();

    function changeColor(){
        document.querySelector('#bgColor').classList.add(newColor);
    };

    /* KEY LEARNINGS FROM PROJECT 1
    1. You can target the element that was clicked using the "target" property of the "event" interface, which was initiated by the "click" method.
    2. the output of the "event.target" is an object, which consists of key-value pairs.
    3. The Object is different than an Array.

    This could have been done in a more simple format if we assigned the color style to the list element's id. We would not have to loop through the class list.
    let x = event.target.id;
    console.log(typeof x);

    */
}

/* Project 2 Pseudo Code
    1. User inputs text into the form and clicks a button.
    2. The user's input is set to lowercase to eliminate case-sensitivity discrepencies.
    3. The entire string is checked for spelling correctness.
    4. The first three letters of the input are compared against the correct strings.
    5. If the input length and first three letters match the intended string, or if the spelling is completely correct, then will display feedback.
*/
document.querySelector('#submitDate').addEventListener('click', checkDate)
function checkDate(){
    const itinerary = {
        monday: "boring",
        tuesday: "class",
        wednesday: "boring",
        thursday: "class",
        friday: "boring",
        saturday: "it's the weekend!",
        sunday: "it's the weekend!",
    };

    // const agendaArray = Object.values(itinerary);

    // Grab the first three letters of the string 
    let inputDate = document.querySelector('#day').value.substring(0,3).toLowerCase();

    if (inputDate.length >= 3){
        // Check if the first three letters appear in the the key array one time and grab the matched key.
        // Take the Itinerary object, and create an Array of its keys. Take the array of keys, and apply a filter to get a sub-set of the array. Within that subset, check if 
        // Object.keys(itinerary) will return an array of the keys
        // The filter() method will create a sub-array containing keys that pass the filter
        // The filter() is specified using the includes() method to only contain the keys that include the variable inputDate
        const itineraryKeyArray = Object.keys(itinerary).filter(each => each.includes(inputDate));
        // const itineraryKeyArray = Object.keys(itinerary).includes(each => each.filter(inputDate));
        // Find the value of the matched key and assign it to the Output element.  
        // While itinerary.monday will return a value, if monday is assigned to a Variable, I must use itinerary[variable]
        document.querySelector('#userOutput').value = itinerary[itineraryKeyArray];
        } else{
        return
    }
    /* KEY LEARNINGS FROM PROJECT 2
    1. The dot notation to access a property of an object can only be used if the property is known. example: object.propertyName
    2. The bracket notation to access a property of an object can be used if the property is unknown. example: object[variableName]
    3. The filter() method of an array will return an array containing values that pass the filter.
    4. The includes() method of an array will check if the arguement is contained with the array values, returning True or False. We do not look for an exact copy, but if the Array values contain it at all.
    */
}

/* Project 5 Pseudo Code
    1. Select initial temperature unit.
    2. Input initial temperature value.
    3. Submit request
    4. Perform mathematical conversion.
    5. Show user the converted temperature value and units.
*/

// Create event listeners, waiting for a click on the radio buttons.
// Create event listeners, waiting for a click on the submit button.

// document.querySelector('.tempUnitBtn').addEventListener('click', initialUnits);
document.querySelector('#convertTemp').addEventListener('click', convertTemp);
// document.querySelector('#convertTemp').addEventListener('click', setTemp);

// function setTemp{
    
// }

console.log(document.querySelector('.radio').classList)

function convertTemp(initialUnits){
    let initialTemperature = document.querySelector('.numberInput').value;
    let finaltemperature = initialTemperature * (9/5) + 32;
    document.querySelector('#newTemperature').innerText = finaltemperature;
}

// using the innerHTML property poses a security vulnerability, as it allows for javascript injection
// Use the InnerText property to modify the content of an element
