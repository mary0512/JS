//1

console.log(1 == 2)//false
console.log(1 != 2)//true
console.log(1 == 1)//true
console.log(1 != 1)//false
console.log("text" == 5)//false
console.log("text" != 5)//true
console.log("text" == "Text")//false
console.log("text" == "text")//true
console.log(true == "true")//false
console.log(true == false)//false
console.log(false == 0)//true
console.log(false === 0)//false
console.log("" == false)//true
console.log("" !== false)//true
console.log(undefined === null)//false
console.log(undefined == null)//true
console.log(17 === true)//false
console.log("17" === true)//false
console.log({} === {})//false

//2
let even = prompt('Введите число:', '');

console.log(`Четное число ${even} ? : `, even % 2 === 0)

//3
let odd = prompt('Введите число:', '');

console.log(`Нечетное число ${odd} ? : `, odd % 2 !== 0)

//4
// +=
// -=
// *=
let myNumber = 10
console.log('+= 5', myNumber += 5)
console.log('-= 4', myNumber -= 4)
console.log('*= 3', myNumber *= 3)


//5
let a = "100"
console.log(typeof +a)
console.log(typeof Number(a))
console.log(typeof (a * 1))

// 6
let width = 5;
let height = 4;
let c = (width + height) * (width - height);
let d = (width ** 2) - (height ** 2);
console.log(c);
console.log(d);
console.log (c === d); // true

//*1
let x = Number(prompt('Введите число 1:', '')) + 10;

let y = Number(prompt('Введите число 2:', '')) + 10;

let z = Number(prompt('Введите число 3:', '')) + 10;

alert(`summ: ${x + y + z}`)

//*2
let A = Number(prompt('Введите длинну стороны 1:', ''));

let B = Number(prompt('Введите длинну стороны 2:', ''));

let C = Number(prompt('Введите длинну стороны 3:', ''));

let X = A + B > C
let Y = B + C > A
let Z = A + C > B
console.log('triangle: ', X === Y === Z)

// *3
let width1 = 5;
let height1 = 4;
let c1 = (width1 + height1)**3;
let d1 = (width1 ** 3) + (3 * width1 ** 2 * height1) + (3 * width1 * height1 ** 2) + (height1 ** 3);
console.log(c1);
console.log(d1);
console.log ('kub sum: ', c1 === d1);