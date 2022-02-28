import {ThunkAction} from 'redux-thunk';

import {configureStore, Action} from '@reduxjs/toolkit';

import rootReducer from './rootReducer';
import type {RootState} from './rootReducer';

export const store = configureStore({
    reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
