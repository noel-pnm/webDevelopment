/* This script will do the following

1. Take a number from the user 
2. Check what unit of measure the number uses.
3. Apply the correct conversion formula.
4. Show the converted number to the user.

*/
// create event listener

document.querySelector('#convert').addEventListener('click',convert)


function convert(){
    const unit = document.querySelector('input[name="unit"]:checked').value
    let temp = document.getElementById('startTemp').value

    if (unit == "celcius"){
        temp = (temp* 9/5) + 32 // C to F conversion
        // console.log(temp)
        document.querySelector('.result').innerText = `${temp} F` 
    } else{
        temp = (temp-32) * 9/5 // F to C conversion
        document.querySelector('.result').innerText = `${temp} C` 
    }

    console.log(document.querySelector('#cel'))
    console.log(document.querySelector('#fah'))

}
