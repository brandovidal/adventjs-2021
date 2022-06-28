/**
 * It takes a string, splits it into words, filters out words that start with an underscore, and then
 * counts the number of times each word appears
 * @param {string} letter - a string of words separated by spaces (no punctuation)
 * @returns An object with the words as keys and the number of times they appear as values.
 */
export default function listGifts (letter) {
  // ¡Tú puedes!
  const words = letter
    .trim()
    .split(' ')
    .filter((w) => !w.startsWith('_'))

  const counter = words.reduce((acc, cur) => {
    if (!acc[cur]) acc[cur] = 1
    else acc[cur] += 1
    return acc
  }, {})
  return counter
}
