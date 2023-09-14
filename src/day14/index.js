export default function missingReindeer (ids) {
  // ¡No olvides compartir tu solución en redes!
  const size = ids.length
  const lastNumberExists = ids.some((i) => i === size)
  if (!lastNumberExists) {
    return size
  }

  const total = (size * (size + 1)) / 2
  const sum = ids.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  return total - sum
}
