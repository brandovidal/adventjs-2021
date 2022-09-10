/**
 * It takes an array of strings and returns an object with the length of each string as a key and the
 * strings of that length as the value
 * @param {any[]} collection - [
 * @param {any} it - a function that returns the value to group by
 * @returns An object with the length of the string as the key and the string as the value.
 */
export default function groupBy (collection, it) {
  // ¡No olvides compartir tu solución en redes!
  // console.log({ collection, it })

  const groups = collection.reduce((result, current) => {
    const value = current.length
    if (result[value] === undefined) result[value] = []

    console.log(result[value])
    result[value] = [...result[value], current]
    return result
  }, {})
  console.log({ groups })

  return {}
}
