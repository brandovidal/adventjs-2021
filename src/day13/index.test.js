import wrapGifts from './index'

const cases = [
  { input: ['📷', '⚽️'], expected: ['****', '*📷*', '*⚽️*', '****'] },
  { input: ['📷'], expected: ['****', '*📷*', '****'] },
  { input: ['🏈🎸', '🎮🧸'], expected: ['******', '*🏈🎸*', '*🎮🧸*', '******'] }
]

describe('Day 10 - AdventJS challengue', () => {
  test.each(cases)('get $input gift using $expected', ({ input, expected }) => {
    expect(wrapGifts(input)).toEqual(expected)
  })
})
