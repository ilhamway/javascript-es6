/**
 * Hitung berapa banyak pengulangan angka dari array berikut dan kembalikan dalam bentuk key-value
 * Contoh:
 *  Input: [1, 1, 1, 5, 5, 10, 9]
 *  Output: {1: 3, 5: 2, 10: 1, 9: 1}
 *
 */

const countRepetition = (numbers) => {

  let countedNumber = numbers.reduce((allNumber, number) => 
    {
      console.log(number)
      console.log(allNumber)
      if (number in allNumber) {
        allNumber[number]++
      }
      else {
        allNumber[number] = 1
      }
      return allNumber
    }
  , {})

  return countedNumber;
};

console.log(countRepetition([1, 1, 1, 5, 5, 10, 9]))

module.exports = countRepetition