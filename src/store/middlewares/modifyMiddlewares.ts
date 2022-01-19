import { IUser } from '../interfaces';
import { Dispatch } from 'redux';
import { ResponseResultAction } from '../types';
import axios from 'axios';
import { API_LINK } from '../constants';
import { setResponseError, setResponseResult } from '../action-creators/modify-data-action-creators';

export const createUser = (user: IUser) => (dispatch: Dispatch<ResponseResultAction>): void => {
    axios.post<never, boolean>(API_LINK, user)
        .then(response => dispatch(setResponseResult(response)))
        .catch(e => setResponseError(e))
}

export const updateUser = (user: IUser) => (dispatch: Dispatch<ResponseResultAction>): void => {
    axios.put<never, boolean>(API_LINK, user)
        .then(response => dispatch(setResponseResult(response)))
        .catch(e => setResponseError(e))
}

export const deleteUser = (user: IUser) => (dispatch: Dispatch<ResponseResultAction>): void => {
    axios.delete<never, boolean>(API_LINK, { data: user })
        .then(response => dispatch(setResponseResult(response)))
        .catch(e => setResponseError(e))
}