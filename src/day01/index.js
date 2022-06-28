/**
 * "Return an array of all the sheep whose color is red and whose name includes the string 'na'."
 *
 * The function takes an array of sheep objects as input. Each sheep object has two properties: name
 * and color
 * @param {{name: string, color: string}[]} sheeps - an array of sheep objects
 * @returns An array of objects that have the color red and the name includes 'na'
 */
export default function contarOvejas (sheeps) {
  // aquí tu magia
  return sheeps.filter((sheep) => sheep.color === 'rojo' && sheep.name.toLowerCase().includes('na'))
}
