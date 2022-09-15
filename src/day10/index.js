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
