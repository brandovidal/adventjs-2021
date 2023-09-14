export default function wrapGifts (gifts) {
  // ¡No olvides compartir tu solución en redes!
  const DECORATOR = '*'

  // define numbers and max line
  const max = gifts.at(0).length + 2

  // create line decorator
  const decorator = DECORATOR.repeat(max)

  // create lines of tree
  const lines = gifts.map(gift => DECORATOR + gift + DECORATOR)

  // create tree
  return [decorator, ...lines, decorator]
}
