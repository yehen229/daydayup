// 模拟实现lodash 中的 curry 方法
const _ = require('lodash')

function getSum(a, b, c) {
    return a + b + c
}


console.log(curried(1,2,3));
console.log(curried(1,2)(3));
console.log(curried(1)(2,3));

function curry(func) {
    return function curriedFn(...args) {
        if (args.length < func.length) {
            return function () {
                return curriedFn(...args.concat(Array.from(arguments)));
            }
        }
        return func(...args)
    }
}

const curried = curry(getSum)

