import React from 'react'
import { render } from '@testing-library/react'

import { JackpotResultsTable } from './JackpotResultsTable'
import { CurrenciesSymbols } from 'src/helpers'

global.matchMedia = global.matchMedia || (() => ({
  matches: false,
  addListener: jest.fn(),
  removeListener: jest.fn(),
}));

const mockedOdds = {
  "rank0": {
    "winners": 0,
    "specialPrize": 0,
    "prize": 0
  },
  "rank1": {
    "winners": 0,
    "specialPrize": 0,
    "prize": 4400000000
  },
  "rank2": {
    "winners": 7,
    "specialPrize": 0,
    "prize": 31564530
  },
  "rank3": {
    "winners": 4,
    "specialPrize": 0,
    "prize": 19495740
  },
  "rank8": {
    "winners": 35645,
    "specialPrize": 0,
    "prize": 2260
  },
  "rank9": {
    "winners": 39948,
    "specialPrize": 0,
    "prize": 1950
  },
  "rank10": {
    "winners": 73973,
    "specialPrize": 0,
    "prize": 1510
  },
  "rank4": {
    "winners": 40,
    "specialPrize": 0,
    "prize": 649850
  },
  "rank5": {
    "winners": 1158,
    "specialPrize": 0,
    "prize": 20200
  },
  "rank6": {
    "winners": 2013,
    "specialPrize": 0,
    "prize": 9030
  },
  "rank11": {
    "winners": 192409,
    "specialPrize": 0,
    "prize": 1050
  },
  "rank7": {
    "winners": 2327,
    "specialPrize": 0,
    "prize": 6700
  },
  "rank12": {
    "winners": 576689,
    "specialPrize": 0,
    "prize": 860
  }
}

describe('JackpotResultsTable', () => {
  it('should render', () => {
    render(
      <JackpotResultsTable
        odds={mockedOdds}
        currency={'EUR' as CurrenciesSymbols}
      />
    )
  })

  it('should render "5 Numbers + 2 Euronumbers"', () => {
    const {getByText} = render(
      <JackpotResultsTable
        odds={mockedOdds}
        currency={'EUR' as CurrenciesSymbols}
      />
    )
    expect(getByText('5 Numbers + 2 Euronumbers')).toBeTruthy();
  })

  it('should render "73,973x"', () => {
    const {getByText} = render(
      <JackpotResultsTable
        odds={mockedOdds}
        currency={'EUR' as CurrenciesSymbols}
      />
    )
    expect(getByText('73,973x')).toBeTruthy();
  })

  it('should render "€315,645.30"', () => {
    const {getByText} = render(
      <JackpotResultsTable
        odds={mockedOdds}
        currency={'EUR' as CurrenciesSymbols}
      />
    )
    expect(getByText('€315,645.30')).toBeTruthy();
  })
})
