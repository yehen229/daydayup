// // 柯里化
// // 面向过程
// // ''.match(/\s+/g)
// // ''.match(/\d+/g)

// const _ = require('lodash')
// // 函数式


// const match = _.curry(function (reg, str) {
//     return str.match(reg);
// })

// const haveSpace = match(/\s+/g)
// const haveNumber = match(/\d+/g)

// // console.log(haveSpace('hello world'));
// // console.log(haveNumber('abc'));

// const filter = _.curry(function (func, array) {
//     return array.filter(func)
// })

// // console.log(filter(haveSpace, ['John Connor', 'Hon_joni']))

// const findSpace = filter(haveSpace)
// console.log(findSpace(['John Connor', 'Hon_joni']))

const _ = require('lodash')

const match = _.curry((reg) => (str => str.match(reg)))

const haveSpace = match(/\s+/g)
const filter1 = _.curry(function (func, array) {
    return array.filter(func)
})

const findSpace = filter1(haveSpace)

console.log(findSpace(['John Connor', 'Hon_joni']));
