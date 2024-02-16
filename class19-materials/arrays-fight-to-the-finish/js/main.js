//Create an array of movie titles. Loop through the array and each element to the h2.

let movies = ['shrek1', 'shrek2', 'shrek3']

movies.forEach(element => document.querySelector('h2').innerText += ` ${element}` )

//Create an array of numbers. Loop through the array and three to each number and replace the old number.

let numbers = [1, 2, 3, 4, 5]

numbers.forEach((element, index) => {
    numbers[index] = element + 3;
})

console.log(numbers)

//Find the average of all the numbers from question three

let total = 0
numbers.forEach(element =>{total += element})
console.log (total / numbers.length)