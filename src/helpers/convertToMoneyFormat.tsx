import {formatNumbersIntoTriads} from './formatNumbersIntoTriads';
import {CurrenciesSymbols} from './currenciesSymbols';

export const convertToMoneyFormat = (
    prizeAmount: number,
    currency: CurrenciesSymbols,
): string => (
    `${currency}${formatNumbersIntoTriads((prizeAmount / 100).toFixed(2))}`
);
