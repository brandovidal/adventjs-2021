/**
 * For each number in the array, compare it to every other number in the array, and if the second
 * number is greater than the first, subtract the first from the second and add the result to an array
 * of gains. Then, return the highest number in the array of gains.
 * @param {number[]} prices - an array of integers
 * @returns The maximum gain that can be made from buying and selling a stock.
 */
export default function maxProfit (prices) {
  // ¡Y no olvides compartir tu solución en redes!
  const lastIndex = prices.length - 1
  let gains = []

  for (const [index1, firstNumber] of prices.entries()) {
    if (lastIndex === index1) break

    for (const [index2, secondNumber] of prices.entries()) {
      if (index1 === index2) continue
      if (index1 >= index2) continue
      if (firstNumber >= secondNumber) continue

      const gain = secondNumber - firstNumber
      gains = [...gains, gain]
    }
  }

  const max = gains.length === 0 ? -1 : Math.max(...gains)
  return max
}
