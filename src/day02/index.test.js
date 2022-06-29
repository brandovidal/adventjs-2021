import listGifts from './index'

describe('Day 2 - AdventJS challengue', () => {
  test('Read gifts from letter', () => {
    const carta = 'bici coche balón _playstation bici coche peluche'

    const regalos = listGifts(carta)

    const result = {
      bici: 2,
      coche: 2,
      balón: 1,
      peluche: 1
    }

    expect(regalos).toEqual(result)
  })
})
