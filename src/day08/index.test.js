import maxProfit from './index'

describe('Day 8 - AdventJS challengue', () => {
  test('buy to 18, sell to 34', () => {
    expect(maxProfit([39, 18, 29, 25, 34, 32, 5])).toEqual(16)
  })

  test('buy to 10, sell to 70', () => {
    expect(maxProfit([10, 20, 30, 40, 50, 60, 70])).toEqual(60)
  })

  test('no gain possible', () => {
    expect(maxProfit([18, 15, 12, 11, 9, 7])).toEqual(-1)
    expect(maxProfit([3, 3, 3, 3, 3])).toEqual(-1)
  })
})
