/**
 * Buatlah sebuah fungsi yang menerima dua argumen berupa objek kemudian mengembalikan menjadi satu objek gabungan
 *
 * Contoh: {a: 1, b: 2}, {c: 3, d: 4}
 * Output: {a: 1, b: 2, c: 3, d: 4}
 */

const mergeTwoObjects = (firstObject, secondObject) => {
  // TODO: answer here
  let output = {...firstObject, ...secondObject} 
  return output
};

console.log(mergeTwoObjects({a: 1, b: 2}, {c: 3, d: 4}))
module.exports = mergeTwoObjects