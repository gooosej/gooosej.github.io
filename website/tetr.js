/* многострочный
 коментирай  */

// коментарий 

//  Типы данных 
//    String
//    Number
//    Boolean
//    Object
//    Null
//    Undefined

var number = 223
var string = 'message'
var isTrue = true // false
var obj = {a: 1}
var isNull = null
var undef = undefined

console.log(number)

//  ОПЕРАТОРЫ 

var num1 = 345
var num2 = 4453

console.log(num1 + num2)   // оператор сложения
console.log(num2 - num1)   // оператор вычитания
console.log(num2 * num1)   // оператор умножения 
console.log(num2 / num1)   // оператор деления
console.log(5 % 2)         // оператор остатка

var str1 = 'hell'
var str2 = 'ooy'

console.log(str1 +' '+ str2)

console.log('boolean + string:',true + str2)
////////////////////////////////////////////////
var i = 2
console.log(i)

//i = i + 1
i++ // инкремент равносильно верхнему выражению 
//i = i - 1
i-- // инкремент равносильно верхнему выражению 

//i = i + 4
i += 4 // тоже самое с вычитанием, деле, умнож. 
console.log(i)

// ОПЕРАТОРЫ СРАВНЕНИЯ - ВСЕГДА ВОЗВРАЩАЮТ TRUE ИЛИ FALSE



// ПРИОРИТЕТ ОПЕРАЦИЙ

var result = 12 - 6/2
var result2 = 3 + 4 * 2

var isGreater = 20 - 1 * 3 >= 23
var isGreater2 = 20 - 1 * 3 < 23
//             3    13  14  11 ----- степень приоритета (Приоритет операторов MDN)
//             короче все как в математике 

console.log('12 - 6/2:', result)
console.log('3 + 4 * 2:', result2)
console.log('20 - 1 * 3 >= 23:', isGreater)
console.log('20 - 1 * 3 < 23:', isGreater2)


                    // ОПЕРАТОРЫ СРАВНЕНИЯ 

console.log(5 > 3)
// > больше 
// < меньше
// >= больше или равно 
// <= меньше или равно 
// == равенство 
// != не равенство
// === позволяет сравнивать на тип данных  
console.log(4 === '4')




//                              ЛОГИЧЕСКИЕ ОПЕРАТОРЫ

/* 
&&(и) - true если все значения true
|| (или) - true если хоть одно значение true 
! (нет) - инвертирует true или false 
*/
console.log(true && true)
console.log(true && false)

console.log(true || false)
console.log(false || false)

console.log(!true)
console.log((false && true) || (true || false) || !true)
// false || true || false 



//                                  УСЛОВНЫЕ ОПЕРАТОРЫ 

var currentYear = 2020
var carName = 'Audi'
var carYear = 2013
var carAge = currentYear - carYear
                    
if (carAge < 5) {
    console.log(carName + ' младше 5 лет')
} else if (carAge >= 5 && carAge <= 10) {
    console.log(carName + ' больше или равен 5 годам или меньше 10')
} else {
    console.log ('Возраст ' + carName + ' равняется ' + carAge + ' годам')
}

// приводятся к false - ( 0, null, undefiend, '', NaN )
                    
var str = 'hqll'
                    
if (4) {
    console.log('значение True')
} else {
    console.log('Значение false')
}
                    


//                                  ТЕРНАРНЫЙ ОПЕРАТОР 

// if (4) {
//     console.log('значение True')
// } else {
//     console.log('Значение false')
// }

4 ? console.log('значение True') : console.log('Значение false')

var personAge = 225

// if (personAge < 23) {
//     massege = " еще деган"
// } else {
//     massege = " страрик"
// }

var message = personAge < 23 ? " еще деган" : " страрик"


console.log(message)


//                                  ОПЕРАТОР SWITCH CASE

var carColor = 'Yellow'

// if (carColor === 'green') {
//     console.log('цвет машины зелёный')
// } else if (carColor === 'Yellow'){
//     console.log('цвет машины желтый')
// } else if (carColor === 'red') {
//     console.log('цвет машины красный')
// } else {
//     console.log('цвет машины не определён')
// }

switch (carColor) {
    case 'green':
        console.log('цвет машины зелёный')
        break
    case 'Yellow':
        console.log('цвет машины желтый')
        break
    case 'red':
        console.log('цвет машины красный')
        break
    default:
        console.log('цвет машины не определён')
}




//                                      ФУНКЦИИ

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