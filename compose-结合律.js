// 结合律
const _ = require('lodash')

// const f = _.flowRight(_.toUpper, _.first, _.reverse)
const f = _.flowRight(_.flowRight(_.toUpper, _.first), _.reverse)

console.log(f(['1','2','three']));
