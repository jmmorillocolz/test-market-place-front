import { IAuthor } from './IAuthor';
import { IItem } from './IItem';

export interface IFound {
    author: IAuthor;
    categories: string[];
    items: IItem[];
}
