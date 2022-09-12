//柯里化
// function checkAge(age) {
//     let min = 18;    //硬编码
//     return age >= min
// }

// 普通的纯函数
// function checkAge(min, age) {
//     return age >= min
// }

// console.log(checkAge(18, 20))
// console.log(checkAge(18, 22))
// console.log(checkAge(18, 24))

// //函数柯里化
// function checkAge(min) {
//     return function (age) {
//         return age >= min
//     }
// }

//ES6
let checkAge = (min) => (age => age >= min)

let checkAge18 = checkAge(18)
let checkAge20 = checkAge(20)

console.log(checkAge18(12))
console.log(checkAge18(24))
console.log(checkAge20(24))

//柯里化：多个参数时，函数传递部分参数，返回一个方法添加其他参数
