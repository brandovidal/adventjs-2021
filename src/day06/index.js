/**
 * It loops through the array, and for each number, it loops through the array again, and if the sum of
 * the two numbers is equal to the result, it returns the two numbers
 * @param {number[]} numbers - an array of integers
 * @param {number} result - The sum of the two values that will be returned
 * @returns the first pair of numbers that add up to the result.
 */
export default function sumPairs (numbers, result) {
  // ¡Y no olvides compartir tu solución en redes!

  const lastIndex = numbers.length - 1
  const map = new Map()

  for (const [index1, firstNumber] of numbers.entries()) {
    if (lastIndex === index1) break

    for (const [index2, secondNumber] of numbers.entries()) {
      if (index1 === index2) continue
      if (map.has('pairs')) break

      const sum = firstNumber + secondNumber
      if (sum === result) {
        map.set('pairs', [firstNumber, secondNumber])
        break
      }
    }
  }
  return map.get('pairs') || null
}
