import axios from 'axios';
import { _CONFIG_ } from '../../config/Config';
import { IResponse } from '../../shared/interfaces/IResponse';
import { IDetail } from './interfaces/IDetail';
import { IFound } from './interfaces/IFound';

export class SearchService {
    /**
     *
     * @param toSearch
     */
    public static async search(toSearch: string): Promise<IResponse<IFound>> {
        const url = _CONFIG_.apiMarketPlace.search.replace(':query', toSearch);

        const instance = axios.create({
            method: 'GET',
            baseURL: _CONFIG_.rootPath,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const { data } = await instance.get(url);
        return data;
    }

    /**
     *
     * @param toSearch
     */
    public static async details(toSearch: string): Promise<IResponse<IDetail>> {
        const url = _CONFIG_.apiMarketPlace.details.replace(':id', toSearch);

        const instance = axios.create({
            method: 'GET',
            baseURL: _CONFIG_.rootPath,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const { data } = await instance.get(url);
        return data;
    }
}
