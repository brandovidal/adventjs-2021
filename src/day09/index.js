/**
 * It takes a collection and a function or string, and returns an object with the collection grouped by
 * the function or string
 * @param { object[] } collection - an array of objects
 * @param { string | Function } it - The iterator function.
 * @returns An object with the values of the array grouped by the value of the property passed as a
 * parameter.
 */
export default function groupBy (collection, it) {
  // ¡No olvides compartir tu solución en redes!
  // console.log({ collection, it })

  return collection.reduce((result, current) => {
    const value = typeof it === 'string' ? current[it] : it(current)
    if (result[value] === undefined) result[value] = []

    result[value] = [...result[value], current]
    return result
  }, {})
}
