/**
 * Tampilkan tipe data dari setiap elemen array
 * Input: ["A", 3, [2]]
 * Outout: ["string", "number", "object"]
 *
 * Hint:
 * - Untuk pengecekan tipe data kalian dapat menggunakan typeof
 * - Pastikan menggunakan for-of untuk perulangan
 */

const convertElementToType = (array) => {
  // TODO: answer here
  let output = []
  for(tipe of array){
    output.push(typeof(tipe))
  }
  return output
};

console.log(convertElementToType(["A", 3, [2]]))
module.exports = convertElementToType