export default function getMinJump (obstacles) {
  // reorder list
  const list = obstacles.sort((a, b) => a - b)

  // jump list
  const max = Math.max(...obstacles)
  const jumps = Array(max)
    .fill(0)
    .map((_, a) => a + 1)

  // methods
  const residue = (item, jump) => item % jump === 0
  const minJump = (list, jump) => !list.some((item) => residue(item, jump))

  return jumps.find((jump) => minJump(list, jump))
}
