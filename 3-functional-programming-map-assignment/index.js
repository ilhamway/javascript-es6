/**
 * Keluarkan rata-rata dari semua murid yang ada.
 *
 * Contoh
 *  input: [
 *  {
 *      name: "Yono",
 *      nilai: [6, 8, 7, 7, 5, 5]
 *  },
 *  {
 *      name: "Dodi",
 *      nilai: [9, 6, 5, 10, 8, 6]
 *  },
 *  {
 *      name: 'Dori',
 *      nilai: [4, 5, 6, 3, 5, 6]
 *  }
 * ]
 *
 *  output: [{ name: "Yono", rataNilai: 6}, { name: "Dodi", rataNilai: 7}, { name: "Dori", rataNilai: 6}]
 *
 * Hint: gunakan Math.round() untuk membulatkan nilai rata-rata.
 */

const returnUserAverageScore = (students) => {
  // TODO: answer here
  const output = students.map(student => 
    ({name:student.name, 
      rataNilai: Math.round((student.nilai.reduce((a, b) => a + b, 0) / student.nilai.length))})
    )
  return output
};

const input = 
[
   {
        name: "Yono",
        nilai: [6, 8, 7, 7, 5, 5]
    },
    {
        name: "Dodi",
        nilai: [9, 6, 5, 10, 8, 6]
    },
    {
        name: 'Dori',
        nilai: [4, 5, 6, 3, 5, 6]
    }
]

console.log(returnUserAverageScore(input))

module.exports = returnUserAverageScore