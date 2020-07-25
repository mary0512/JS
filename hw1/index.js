// 1
console.log("My first debug")

//2
let age = 3
let name ="Deizi"
console.log(age, name)

//3
age = 5
console.log(age, name)

//4
let myNumber = 19
let myFloat = 34.888
let myString = "Mari"
let myBoolean = true
let myNull = null
let myUndefined
let myObject = {
    name: "Mari",
    age: 18,
}
let myArray = [myObject, myNumber, myNull, myFloat, myString]
console.log(
    typeof(myNumber),
    typeof(myFloat), 
    typeof(myString),
    typeof(myBoolean),
    typeof(myNull),
    typeof(myUndefined),
    typeof(myObject),
    typeof(myArray)
    )

//5
const student = {
    name: "Maryna",
    surname: "Nikiforova",
    isActive: true
}
console.log(typeof(student.isActive))

//6
let myFruits = ["apple", "pear", "plum", "cherry", "peach"]
let myNumbers = [1, 2, 3, 4, 5]
let myStudents = [
    {
        name: "Maryna",
        surname: "Nikiforova",
        isActive: true
    },
    {
        name: "Mary",
        surname: "Forova",
        isActive: false
    },
    {
        name: "Ana",
        surname: "Nirova",
        isActive: true
    },
    {
        name: "Yryna",
        surname: "Urova",
        isActive: true
    },
    {
        name: "Karyna",
        surname: "Kirova",
        isActive: true
    }
]
