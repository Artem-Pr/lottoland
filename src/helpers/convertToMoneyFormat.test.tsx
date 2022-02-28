import { convertToMoneyFormat } from './convertToMoneyFormat'
import { CurrenciesSymbols } from './currenciesSymbols'

describe('convertToMoneyFormat', () => {
  it('should return €44,000,000.00', () => {
    expect(convertToMoneyFormat(4400000000, CurrenciesSymbols.EUR)).toBe('€44,000,000.00')
  })
  it('should return $315,645.30', () => {
    expect(convertToMoneyFormat(31564530, CurrenciesSymbols.USD)).toBe('$315,645.30')
  })
})
