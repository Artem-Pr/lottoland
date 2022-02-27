import { convertNumberToRoman } from './convertNumberToRoman'

describe('convertNumberToRoman', () => {
  it('should return VI', () => {
    expect(convertNumberToRoman(6)).toBe('VI')
  })
  it('should return MMMDCCCLXXXVIII', () => {
    expect(convertNumberToRoman(3888)).toBe('MMMDCCCLXXXVIII')
  })
  it('should return LXXVI', () => {
    expect(convertNumberToRoman(76)).toBe('LXXVI')
  })
  it('should return empty string', () => {
    expect(convertNumberToRoman(0)).toBe('')
  })
  it('should return empty string', () => {
    expect(convertNumberToRoman('')).toBe('')
  })
})
