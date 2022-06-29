/**
 * It takes a store and a product, and returns true if the product is in the store, and false if it
 * isn't
 * @param {{ [s: string]: any; } | ArrayLike<any>} store - an object representing a store's inventory.
 * @param {string} product - the product to search for
 * @returns a boolean value.
 */
export default function contains (store, product) {
  // ¡Y no olvides compartir tu solución en redes!

  const getListOfProduct = (list) =>
    list.flatMap((item) => {
      if (typeof item === 'object') {
        return getListOfProduct(Object.values(item))
      }
      return item
    })

  const listOfProducts = getListOfProduct(Object.values(store))

  return listOfProducts.some((item) => item === product)
}
