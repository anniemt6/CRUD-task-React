import { IUser } from '../interfaces';
import { UsersAction } from '../types';
import { UsersActionType } from './ActionTypes';

export const setUsersData = (users: Array<IUser>): UsersAction => ({
    type: UsersActionType.SET_USERS_DATA,
    payload: users
});

export const setUsersLoading = (loading: boolean): UsersAction => ({
    type: UsersActionType.SET_USERS_LOADING,
    payload: loading
});

export const setUsersError = (error: string): UsersAction => ({
    type: UsersActionType.SET_USERS_ERROR,
    payload: error
});