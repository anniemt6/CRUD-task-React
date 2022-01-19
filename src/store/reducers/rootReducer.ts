import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';

export const rootReducer = combineReducers({
    usersData: usersReducer
});

export type RootState = ReturnType<typeof rootReducer>;