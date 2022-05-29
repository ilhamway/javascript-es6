/**
 * Ambil semua element yang dengan digt yang ditentukan
 * - fungsi akan menerima dua argumen
 * - argumen pertama array angka
 * - argumen kedua berapa digit yang akan di filter
 * Contoh
 *  input: [88, 44, 3, 8481, 444], 2
 *  output: [88, 44]
 *
 */

const filterDigit = (array, digit) => {
  // TODO: answer here
  let result = []

  for(let arr of array){
    if(arr.toString().length == 2) result.push(arr)
  }

  return result
};

console.log(filterDigit([88, 44, 3, 8481, 444],2))
module.exports = filterDigit
