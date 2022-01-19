import { UsersActionType } from './action-creators/ActionTypes';
import { IUser } from './interfaces';

type Action<T, P> = {
    type: T
    payload: P
}

type UsersLoadedAction = Action<UsersActionType.SET_USERS_DATA, Array<IUser>>;
type UsersLoadingAction = Action<UsersActionType.SET_USERS_LOADING, boolean>;
type UsersLoadingErrorAction = Action<UsersActionType.SET_USERS_ERROR, string>;
export type UsersAction = UsersLoadedAction | UsersLoadingAction | UsersLoadingErrorAction;