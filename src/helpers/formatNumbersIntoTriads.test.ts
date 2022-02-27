import { formatNumbersIntoTriads } from './formatNumbersIntoTriads'

describe('formatNumbersIntoTriads', () => {
  it('should return 4,400,000,000', () => {
    expect(formatNumbersIntoTriads(4400000000)).toBe('4,400,000,000')
  })
  it('should return 44,000,000.00', () => {
    expect(formatNumbersIntoTriads('44000000.00')).toBe('44,000,000.00')
  })
})
