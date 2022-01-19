import { ResponseActionType } from './ActionTypes';
import { ResponseResultAction } from '../types';

export const setResponseResult = (result: boolean): ResponseResultAction => ({
    type: ResponseActionType.SET_RESPONSE_RESULT,
    payload: result
});

export const setResponseError = (error: string): ResponseResultAction => ({
    type: ResponseActionType.SET_RESPONSE_ERROR,
    payload: error
});