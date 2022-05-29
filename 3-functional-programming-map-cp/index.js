/**
 * Tampilkan pasang huruf besar dari semua huruf kecil yang ada pada array
 
 * Contoh 
 *  input: ['a', 'b', 'c', 'd']
 *  output: [ {'a': 'A'}, {'b': 'B'}, {'D': 'c'}, {'d': 'D'}]
 * 
 */

const lowerToUpperMap = (array) => {
  // TODO: answer here
  const output = array.map(alphabet => ({[alphabet]:alphabet.toUpperCase()}))
  return output
};

const input = ['a', 'b', 'c', 'd']
console.log(lowerToUpperMap(input))

module.exports = lowerToUpperMap
