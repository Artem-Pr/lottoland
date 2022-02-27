import {formatNumbersIntoTriads} from './formatNumbersIntoTriads';

export const convertToMoneyFormat = (prizeAmount: number): string => (
    `€${formatNumbersIntoTriads((prizeAmount / 100).toFixed(2))}`
);
