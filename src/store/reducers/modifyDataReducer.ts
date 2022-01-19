import { IResponseResult } from '../interfaces';
import { ResponseResultAction } from '../types';
import { ResponseActionType } from '../action-creators/ActionTypes';

const initialState: IResponseResult = {
    success: false,
    error: ''
};

export const modifyDataReducer = (state = initialState, action: ResponseResultAction): IResponseResult => {
    switch(action.type) {
        case ResponseActionType.SET_RESPONSE_RESULT:
            return {
                ...state,
                success: action.payload
            };
        case ResponseActionType.SET_RESPONSE_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}