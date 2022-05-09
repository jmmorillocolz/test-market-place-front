import { ECurrency } from '../../../shared/enums/ECurrency';

export interface IPrice {
    currency: ECurrency;
    amount: number;
    decimals: string;
}
