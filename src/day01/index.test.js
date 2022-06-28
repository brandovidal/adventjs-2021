import countSheeps from './index'

describe('Day 1 - AdventJS challengue', () => {
  test('filter sheeps by their red color and name', () => {
    const sheeps = [
      { name: 'Noa', color: 'azul' },
      { name: 'Euge', color: 'rojo' },
      { name: 'Navidad', color: 'rojo' },
      { name: 'Ki Na Ma', color: 'rojo' }
    ]

    const result = [
      { name: 'Navidad', color: 'rojo' },
      { name: 'Ki Na Ma', color: 'rojo' }
    ]

    expect(countSheeps(sheeps)).toEqual(result)
  })
})
