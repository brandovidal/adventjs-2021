import shouldBuyFidelity from './index'

describe('Day 10 - AdventJS challengue', () => {
  test.each([1, 5, 11, 20])('should buy fidelity ticket, that when you going %i times', (input) => {
    expect(shouldBuyFidelity(input)).toBeFalsy()
  })

  test.each([40, 100, 300])('should buy normal ticket %i times, that when you buy fidelity', (input) => {
    expect(shouldBuyFidelity(input)).toBeTruthy()
  })
})
