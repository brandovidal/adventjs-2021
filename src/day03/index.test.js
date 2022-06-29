import isValid from './index'

describe('Day 3 - AdventJS challengue', () => {
  test('is valid letter with unclosed parenthesis', () => {
    expect(isValid('bici (balón bici coche')).toBeFalsy() // ❌
  })

  test('is valid letter with closed parenthesis', () => {
    expect(isValid('(muñeca) consola bici')).toBeTruthy() // ✅
    expect(isValid('a (b) (ca) d')).toBeTruthy() // ✅
  })

  test('is valid letter with empty parenthesis', () => {
    expect(isValid('() bici')).toBeFalsy() // ❌
    expect(isValid('(()) bici')).toBeFalsy() // ❌
  })

  test('is valid letter with disordered parenthesis', () => {
    expect(isValid(')bici( casa play')).toBeFalsy() // ❌
  })

  test('is valid letter with unpair parenthesis', () => {
    expect(isValid('(a() bici (a)')).toBeFalsy() // ❌
  })

  test('is invalid letter with invalid chracters', () => {
    expect(isValid('peluche {) bici')).toBeFalsy() // ❌
    expect(isValid('peluche }) bici')).toBeFalsy() // ❌
    expect(isValid('peluche [) bici')).toBeFalsy() // ❌
    expect(isValid('peluche ]) bici')).toBeFalsy() // ❌
  })
})
