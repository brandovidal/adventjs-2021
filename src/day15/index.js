export default function checkSledJump (heights) {
  const size = heights.length
  if (size < 3) return false

  let isDelta = false
  for (const [index] of Object.entries(heights)) {
    const nextIndex = Number(index) + 1
    const lastIndex = nextIndex + 1
    if (size === lastIndex) return isDelta

    const first = heights[index]
    const second = heights[nextIndex]
    const third = heights[lastIndex]

    const diff1 = second - first
    const diff2 = third - second
    console.log({ first, second, third, diff1, diff2 })

    if (diff1 || diff2) {
      isDelta = true
    }
  }
  return isDelta
}
