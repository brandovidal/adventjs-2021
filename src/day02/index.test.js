import listGifts from './index'

describe('Day 2 - AdventJS challengue', () => {
  test('Read gifts from letter', () => {
    const letter = 'bici coche balón _playstation bici coche peluche'
    const regalos = listGifts(letter)
    const result = {
      bici: 2,
      coche: 2,
      balón: 1,
      peluche: 1
    }

    expect(regalos).toEqual(result)
  })

  test('Read vowels and consonants from letter', () => {
    const letter = '_bici _ a m __ b c a b c'
    const regalos = listGifts(letter)
    const result = {
      a: 2,
      b: 2,
      c: 2,
      m: 1
    }

    expect(regalos).toEqual(result)
  })
})
