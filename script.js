const passwordLengthElement = document.getElementById('passwordLengthNumber')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeLowercaseElement = document.getElementById('includeLowercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const form = document.getElementById('passwordForm')
const generatedPassword = document.getElementById('password')
const lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbolCharacters = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', "\\", ']', '^', '_', '`', '{', '|', '}', '~']
const defaultPassword = "Please select criteria"

form.addEventListener('submit', e => {
  e.preventDefault()
  const passwordLength = passwordLengthElement.value
  const includeUppercase = includeUppercaseElement.checked
  const includeLowercase = includeLowercaseElement.checked
  const includeNumbers = includeNumbersElement.checked
  const includeSymbols = includeSymbolsElement.checked
  const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols)
  generatedPassword.innerText = password
})

function generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
  let newPassword = []
  if (includeLowercase) {newPassword = newPassword.concat(lowercaseCharacters)}
  if (includeUppercase) {newPassword = newPassword.concat(uppercaseCharacters)}
  if (includeNumbers) {newPassword = newPassword.concat(numberCharacters)}
  if (includeSymbols) {newPassword = newPassword.concat(symbolCharacters)}
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols) {return defaultPassword}

  const passwordCharacters = []
  for (let i = 0; i < passwordLength; i++) {
    const characters = newPassword[Math.floor(Math.random() * newPassword.length)]
    passwordCharacters.push(String(characters))
  }
  return passwordCharacters.join('')
}
