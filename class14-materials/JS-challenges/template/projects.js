// Project 1 Pseudo Code
// 1. User clicks on the list item.
// 2. Update the background color of the ul based on the list item being clicked.

// const colorOptions = document.querySelectorAll(".pick");
// colorOptions.forEach(element => element.addEventListener('click', changeBackground));


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

    /* KEY LEARNINGS
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