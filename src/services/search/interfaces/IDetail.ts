import { IAuthor } from './IAuthor';
import { IItem } from './IItem';

export interface IDetail {
    author: IAuthor;
    item: IItem;
    categories: string[];
}
