import wrapGifts from './index'

const cases = [
  { input: [0, 2, 3], expected: 1 },
  { input: [5, 6, 1, 2, 3, 7, 0], expected: 4 },
  { input: [0, 1], expected: 2 },
  { input: [9, 2, 3, 5, 6, 4, 7, 0, 1], expected: 8 },
  { input: [0], expected: 1 }
]

describe('Day 14 - AdventJS challengue', () => {
  test.each(cases)('get $input gift using $expected', ({ input, expected }) => {
    expect(wrapGifts(input)).toEqual(expected)
  })
})
