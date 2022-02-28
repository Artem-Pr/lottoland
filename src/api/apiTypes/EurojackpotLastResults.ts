import {CurrenciesSymbols} from 'src/helpers';

interface ResultsNumbers {
    numbers: number[]
    euroNumbers: number[]
}

export type Odds = Record<string, {
    winners: number,
    specialPrize: number,
    prize: number,
}>;

export interface EurojackpotLastResults extends ResultsNumbers {
    currency: CurrenciesSymbols
    drawingDate: string
    odds: Odds
}

export interface EurojackpotResults {
    last: EurojackpotLastResults
    next: object
}
