/**
 * Customisable greeting
 * Buatlah fungsi untuk memformat nama ada sebuah ucapan.
 * Fungsi terebut menerima dua argumen sebagai input
 * Argumen pertama berupa objek user, contoh: let user = { firstName: "John", lastName: "Doe" };
 * Argumen kedua berupa callback untuk memformat nama user.
 *
 */

function formatCallback(user){
  const { firstName, lastName } = user
  let formattedName = `${firstName} ${lastName}`
  return formattedName
}

function customisableGreeting(user, formatCallback) {
  // TODO: answer here
  const formattedName = formatCallback(user)
  return `Hi name is ${formattedName}, how are you?`;
}

module.exports = customisableGreeting