import getMinJump from './index'

const cases = [
  { input: 4, expected: [1, 2, 3, 5] },
  { input: 2, expected: [3, 7, 5] },
  { input: 7, expected: [2, 4, 6, 8, 10] }
]

describe('Day 10 - AdventJS challengue', () => {
  test.each(cases)('get $input min jump using $expected', ({ input, expected }) => {
    expect(getMinJump(expected)).toEqual(input)
  })
})
