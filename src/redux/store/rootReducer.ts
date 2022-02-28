import {combineReducers} from '@reduxjs/toolkit';

import {eurojackpotResultsReducer} from '../reducers/eurojackpotResults-reducer';

const rootReducer = combineReducers({
    eurojackpotResultsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
