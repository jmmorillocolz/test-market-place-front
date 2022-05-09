import { EStatusCode } from '../enums/EStatusCode';

export interface IResponse<T> {
    code: EStatusCode;
    message: string;
    payload?: T;
    errors?: Array<string> | string | Record<string, unknown> | Array<Record<string, unknown>>;
}
