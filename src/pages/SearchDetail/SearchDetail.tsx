import { Button, createTheme, ThemeProvider } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { IItem } from '../../services/search/interfaces/IItem';
import { SearchService } from '../../services/search/SearchService';
import { SearchDetailStyles } from './SearchDetailStyles';
import { blue } from '@material-ui/core/colors';
import { formatPrice } from '../../shared/utils/formats';
import { EStatusCode } from '../../shared/enums/EStatusCode';
import noImage from '../../assets/icons/noImage.svg';
import { ECurrencySymbol } from '../../shared/enums/ECurrencySymbol';
import { ECurrency } from '../../shared/enums/ECurrency';

interface IConditions {
    [key: string]: string;
}
const AConditions: IConditions[] = [{ new: 'Nuevo' }];

/**
 * Render page search results
 * @returns {JSX.Element}
 */
const SearchDetail = (): JSX.Element => {
    const [itemDetails, setItemDetails] = useState<IItem>({} as IItem);
    const [itemCategory, setItemCategory] = useState<string[]>(['']);
    const [loaderIsHidden, setLoaderIsHidden] = useState<boolean>(true);
    const { id: idItemDetail } = useParams();
    const navigate = useNavigate();
    const pathError = '/error/';

    useEffect(() => {
        getDetail();
        return;
    }, [idItemDetail]);

    const customTheme = createTheme({
        palette: {
            primary: blue
        }
    });

    /**
     * Condition
     */
    const translateCondition = (key: string): string => {
        const [condition] = AConditions.filter((values) => values[key]).map((value) => value[key]);

        return condition;
    };

    /**
     * Get detail
     * @returns {void}
     */
    const getDetail = (): void => {
        setLoaderIsHidden(false);
        SearchService.details(idItemDetail as string)
            .then((res) => {
                const { code, payload: { item, categories = [] } = {} } = res;
                if (code === EStatusCode.Success) {
                    if (item) {
                        setItemDetails(item as IItem);
                        setItemCategory(categories);
                        setLoaderIsHidden(true);
                    } else {
                        setLoaderIsHidden(true);
                        navigate(
                            `${pathError} No se obtuvo la información sobre este producto. Por favor intente de nuevo más tarde.`
                        );
                    }
                } else {
                    setLoaderIsHidden(true);
                    navigate(`${pathError} No fue posible obtener información del producto.`);
                }
            })
            .catch((err) => {
                navigate(`${pathError}${err.message}`);
                setLoaderIsHidden(true);
            });
    };

    return (
        <>
            <Loader hidden={loaderIsHidden} />
            <div style={SearchDetailStyles.breadcrumb}>{`${itemCategory}`}</div>
            <div style={SearchDetailStyles.container}>
                <div style={SearchDetailStyles.containerImage}>
                    <img
                        src={itemDetails?.picture ? itemDetails?.picture : noImage}
                        alt={itemDetails?.title}
                        style={
                            itemDetails?.picture
                                ? SearchDetailStyles.image
                                : SearchDetailStyles.noImage
                        }
                    />
                </div>
                <div style={SearchDetailStyles.infoProduct}>
                    <div style={SearchDetailStyles.condition}>{`${
                        itemDetails?.condition
                            ? translateCondition(itemDetails?.condition as string)
                            : ''
                    } | ${
                        itemDetails?.sold_quantity ? itemDetails?.sold_quantity : 0
                    } vendidos`}</div>
                    <div style={SearchDetailStyles.infoProductTitle}>{itemDetails?.title}</div>
                    <div style={SearchDetailStyles.infoProductPrice}>
                        <div style={SearchDetailStyles.amount}>
                            {`${
                                ECurrencySymbol[
                                    itemDetails.price && itemDetails.price.currency
                                        ? itemDetails?.price.currency
                                        : ECurrency.ARS
                                ]
                            } ${
                                (itemDetails?.price?.amount as number)
                                    ? formatPrice(itemDetails.price.amount as number)
                                    : ''
                            }`}
                        </div>
                        <div style={SearchDetailStyles.amountDecimals}>
                            {itemDetails?.price?.decimals &&
                            (itemDetails?.price?.decimals as string).length <= 1
                                ? `${itemDetails?.price?.decimals as string}0`
                                : (itemDetails?.price?.decimals as string)}
                        </div>
                    </div>
                    <div style={SearchDetailStyles.freeShipping}>
                        {itemDetails.free_shipping ? 'Envío Gratis' : ''}
                    </div>
                    <div style={SearchDetailStyles.button}>
                        <ThemeProvider theme={customTheme}>
                            <Button color={'primary'} variant={'contained'} fullWidth>
                                {'Comprar'}
                            </Button>
                        </ThemeProvider>
                    </div>
                </div>
                <div style={SearchDetailStyles.description}>
                    <div style={SearchDetailStyles.descriptionTitle}>
                        {'Descripción del Producto'}
                    </div>
                    <div style={SearchDetailStyles.descriptionText}>
                        {itemDetails?.description && itemDetails?.description.length > 0
                            ? itemDetails?.description
                            : '** No se informó descripción del producto **'}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchDetail;
