import { IUser, Result } from '../interfaces';
import { UsersAction } from '../types';
import { UsersActionType } from '../action-creators/ActionTypes';

const initialState: Result<Array<IUser>> = {
    data: [],
    isLoading: false,
    error: ''
};

export const usersReducer = (state = initialState, action: UsersAction): Result<Array<IUser>> => {
    switch (action.type) {
        case UsersActionType.SET_USERS_DATA:
            return {
                ...state,
                data: action.payload
            };
        case UsersActionType.SET_USERS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case UsersActionType.SET_USERS_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}