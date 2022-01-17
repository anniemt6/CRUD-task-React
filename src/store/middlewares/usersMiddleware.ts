import { Dispatch } from 'redux';
import { UsersAction } from '../types';
import { setUsersData, setUsersError, setUsersLoading } from '../action-creators/action-creators';
import axios from 'axios';
import { IAxiosResponse } from '../interfaces';
import { API_LINK } from '../constants';

export const getAllUsers = () => (dispatch: Dispatch<UsersAction>): void => {
    dispatch(setUsersLoading(true));
    axios.get<never, IAxiosResponse>(API_LINK)
        .then(response => {
            const { data: { data }} = response;
            dispatch(setUsersData(data));
        })
        .catch(e => {
            dispatch(setUsersError(e.message));
        });
}