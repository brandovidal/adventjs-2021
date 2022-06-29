/**
 * It splits the string into words, filters out the words that don't have any brackets, and then checks
 * if any of the remaining words start with an opening bracket and end with a closing bracket
 * @param {string} letter - The letter that you're trying to validate.
 * @returns A function that takes a string as an argument and returns a boolean.
 */
export default function isValid (letter) {
  // ¡No dejes que el Grinch gane!
  const char = letter.split('')
  const startChar = char.filter(l => l === '(').length
  const endChar = char.filter(l => l === ')').length

  if (startChar !== endChar) return false

  const words = letter.split(' ')
  const filteredWords = words
    .filter(w => !w.match(/\{\}\[\]/g) && !w.match(/\(\)/g))
    .map(w => w.replace(/\(\)/g, ''))

  return filteredWords.some(w => w.startsWith('(') && w.endsWith(')'))
}
