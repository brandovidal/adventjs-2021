/**
 * It takes the change amount, and then for each coin value, it calculates how many of that coin can be
 * used to make up the change amount, and then subtracts that amount from the change amount, and then
 * repeats the process for the next coin value
 * @param { number } change - The amount of change to be returned.
 * @returns An array of numbers.
 */
export default function getCoins (change) {
  // ¡No olvides compartir tu solución en redes!
  let remainder = null
  const INITIAL_VALUE = [0, 0, 0, 0, 0, 0]
  const CENTS = [50, 20, 10, 5, 2, 1]

  return CENTS.reduce((result, currentValue, currentIndex) => {
    if (remainder === null) remainder = change

    if (remainder >= currentValue) {
      result[currentIndex] = Math.floor(remainder / currentValue)
      remainder = remainder % currentValue
    }
    return result
  }, INITIAL_VALUE).reverse()
}
