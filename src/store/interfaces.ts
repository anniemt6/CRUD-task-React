export interface Result<T> {
    data: T,
    isLoading?: boolean;
    error: string
}

export interface IUser {
    id: number;
    userName: string;
    userSurname: string;
    userAge: string;
}

export interface IAxiosResponse {
    data: {
        data: Array<IUser>;
        status: number;
        statusText: string;
    }
}