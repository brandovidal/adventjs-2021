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

  return words.reduce((gifts, word) => {
    if (!gifts[word]) gifts[word] = 1
    else gifts[word] += 1
    return gifts
  }, {})
}
