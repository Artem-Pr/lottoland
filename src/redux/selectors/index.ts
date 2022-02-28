import {RootState} from '../store/rootReducer';

export const eurojackpotResults = (state: RootState) => state.eurojackpotResultsReducer.last;
