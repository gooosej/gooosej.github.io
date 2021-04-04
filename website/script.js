var carName = 'Audi'
let carYear = 2001
let personYear = 1990

function calculateAge(year) {
    let currentYear = 2001
    let result = currentYear - year 
    return result 
}

if (calculateAge(carYear) < 10) {
    console.log('возратс меньше 10 лет')
} else {
    console.log('Возраст больше 10 лет')
}

if (calculateAge(personYear)< 10) {
    console.log('возратс меньше 10 лет')
} else {
    console.log('Возраст больше 10 лет')
}