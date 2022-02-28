import {Odds} from 'src/api/apiTypes';

interface Match {
    numbers: number
    euroNumbers: number
}

interface JackpotResultsTableConfigTypes {
    matchArray: Match[]
    odds: Odds
}

export const JackpotResultsTableConfig: JackpotResultsTableConfigTypes = {
    matchArray: [
        {
            numbers: 5,
            euroNumbers: 2,
        },
        {
            numbers: 5,
            euroNumbers: 1,
        },
        {
            numbers: 5,
            euroNumbers: 0,
        },
        {
            numbers: 4,
            euroNumbers: 2,
        },
        {
            numbers: 4,
            euroNumbers: 1,
        },
        {
            numbers: 4,
            euroNumbers: 0,
        },
        {
            numbers: 3,
            euroNumbers: 2,
        },
        {
            numbers: 2,
            euroNumbers: 2,
        },
        {
            numbers: 3,
            euroNumbers: 1,
        },
        {
            numbers: 3,
            euroNumbers: 0,
        },
        {
            numbers: 1,
            euroNumbers: 2,
        },
        {
            numbers: 2,
            euroNumbers: 1,
        },
    ],
    odds: {
        rank0: {
            winners: 0,
            specialPrize: 0,
            prize: 0,
        },
        rank1: {
            winners: 0,
            specialPrize: 0,
            prize: 4400000000,
        },
        rank2: {
            winners: 7,
            specialPrize: 0,
            prize: 31564530,
        },
        rank3: {
            winners: 4,
            specialPrize: 0,
            prize: 19495740,
        },
        rank8: {
            winners: 35645,
            specialPrize: 0,
            prize: 2260,
        },
        rank9: {
            winners: 39948,
            specialPrize: 0,
            prize: 1950,
        },
        rank10: {
            winners: 73973,
            specialPrize: 0,
            prize: 1510,
        },
        rank4: {
            winners: 40,
            specialPrize: 0,
            prize: 649850,
        },
        rank5: {
            winners: 1158,
            specialPrize: 0,
            prize: 20200,
        },
        rank6: {
            winners: 2013,
            specialPrize: 0,
            prize: 9030,
        },
        rank11: {
            winners: 192409,
            specialPrize: 0,
            prize: 1050,
        },
        rank7: {
            winners: 2327,
            specialPrize: 0,
            prize: 6700,
        },
        rank12: {
            winners: 576689,
            specialPrize: 0,
            prize: 860,
        },
    },
};
