import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Item from '../../components/Item/Item';
import Loader from '../../components/Loader/Loader';
import { _CONFIG_ } from '../../config/Config';
import { IItem } from '../../services/search/interfaces/IItem';
import { SearchService } from '../../services/search/SearchService';
import { EStatusCode } from '../../shared/enums/EStatusCode';
import { SearchResultsStyles } from './SearchResultsStyles';
import { useNavigate } from 'react-router-dom';

/**
 * Render page search results
 * @returns {JSX.Element}
 */
const SearchResults = (): JSX.Element => {
    const [itemsFound, setItemsFound] = useState<IItem[]>([]);
    const [categoriesFound, setCategoriesFound] = useState<string[]>(['']);
    const [loaderIsHidden, setLoaderIsHidden] = useState<boolean>(true);
    const { search } = useLocation();
    const paramSearch = new URLSearchParams(search).get('search');
    const navigate = useNavigate();
    const pathError = '/error/';

    useEffect(() => {
        found();
        return;
    }, [paramSearch]);

    /**
     * Render items
     * @param {IItem[]} items
     * @returns {JSX.Element[]}
     */
    const renderItems = (items: IItem[]): JSX.Element[] => {
        const itemsRendered: JSX.Element[] = [];
        items.forEach((item) => {
            const {
                picture,
                price: { amount, decimals, currency },
                title,
                id: itemId,
                address,
                free_shipping
            } = item;

            const url = _CONFIG_.apiMarketPlace.details
                .replace(':id', itemId)
                .replace(_CONFIG_.rootPath, '');

            itemsRendered.push(
                <React.Fragment key={itemId}>
                    <Item
                        id={itemId}
                        price={{
                            amount,
                            decimals,
                            currency
                        }}
                        description={title}
                        place={address && address.length > 0 ? address : '-'}
                        picture={picture}
                        url={url}
                        freeShipping={free_shipping}
                    />
                </React.Fragment>
            );
        });

        return itemsRendered;
    };

    /**
     * Found
     * @returns {void}
     */
    const found = (): void => {
        setLoaderIsHidden(false);
        SearchService.search(paramSearch as string)
            .then((res) => {
                const { code, payload: { items = [], categories = [] } = {} } = res;
                if (code === EStatusCode.Success) {
                    if (items.length > 0) {
                        setCategoriesFound(categories);
                        setItemsFound(items);
                        setLoaderIsHidden(true);
                    } else {
                        setLoaderIsHidden(true);
                        navigate(`${pathError}La búsqueda no arrojó resultados. Intente de nuevo`);
                    }
                } else {
                    setLoaderIsHidden(true);
                    navigate(
                        `${pathError}Error realizando la búsqueda. intente de nuevo más tarde.`
                    );
                }
            })
            .catch((err) => {
                setLoaderIsHidden(true);
                navigate(`${pathError}${err.message}`);
            });
    };

    return (
        <>
            <Loader hidden={loaderIsHidden} />
            <div style={SearchResultsStyles.breadcrumb}>{`${categoriesFound[0]}`}</div>
            {renderItems(itemsFound)}
        </>
    );
};

export default SearchResults;
