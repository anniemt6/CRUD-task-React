import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';
import { modifyDataReducer } from './modifyDataReducer';

export const rootReducer = combineReducers({
    usersData: usersReducer,
    editDataResult: modifyDataReducer
});

export type RootState = ReturnType<typeof rootReducer>;