/* eslint no-param-reassign: 0 */

import {api} from 'src/api';
import type {
    EurojackpotResults as State,
    EurojackpotLastResults,
} from 'src/api/apiTypes';
import {CurrenciesSymbols} from 'src/helpers';

import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import type {AppThunk} from '../store/store';

const initialState: State = {
    last: {
        currency: CurrenciesSymbols.EUR,
        drawingDate: '',
        odds: {},
        numbers: [],
        euroNumbers: [],
    },
    next: {},
};

const eurojackpotResults = createSlice({
    name: 'eurojackpotResults',
    initialState,
    reducers: {
        setEurojackpotLastResults(state, action: PayloadAction<EurojackpotLastResults>) {
            state.last = action.payload;
        },
    },
});

export const {
    setEurojackpotLastResults,
} = eurojackpotResults.actions;

export const eurojackpotResultsReducer = eurojackpotResults.reducer;

export const fetchEurojackpotResults = (): AppThunk => dispatch => {
    api
        .euroJackpot()
        .then(({data}) => {
            const {
                currency,
                drawingDate,
                odds,
                numbers,
                euroNumbers,
            } = data.last;

            dispatch(setEurojackpotLastResults({
                currency,
                drawingDate,
                odds,
                numbers,
                euroNumbers,
            }));
        })
        .catch(error => console.error(error));
};
