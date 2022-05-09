/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link } from 'react-router-dom';
import { formatPrice } from '../../shared/utils/formats';
import { ItemStyle } from './ItemStyle';
import noImage from '../../assets/icons/noImage.svg';

interface IItem {
    id: string;
    price: {
        amount: number;
        decimals: number;
    };
    description: string;
    place: string;
    url: string;
    picture?: string;
}

/**
 * Search component
 * @returns {JSX.Element}
 */
const Item = ({ id, price, description, place, url, picture = '' }: IItem): JSX.Element => {
    return (
        <div style={ItemStyle.item} key={`item_${id}`}>
            <div style={ItemStyle.containerImage}>
                <Link to={url} style={ItemStyle.link}>
                    <img
                        style={picture !== '' ? ItemStyle.image : ItemStyle.noImage}
                        src={picture !== '' ? picture : noImage}
                        alt={description}
                        key={`item_img_${id}`}
                    />
                </Link>
            </div>
            <div style={ItemStyle.containerInfo} key={`item_info_${id}`}>
                <Link to={url} style={ItemStyle.link}>
                    <div style={ItemStyle.priceContainer} key={`item_price_container_${id}`}>
                        <div style={ItemStyle.price} key={`item_price_${id}`}>
                            $ {formatPrice(price.amount)}
                        </div>
                        <div style={ItemStyle.priceDecimal} key={`item_price_decimals_${id}`}>
                            {price.decimals < 10 ? `0${price.decimals}` : price.decimals}
                        </div>
                    </div>
                </Link>
                <div style={ItemStyle.description} key={`item_description_${id}`}>
                    <Link to={url} style={ItemStyle.link}>
                        {description}
                    </Link>
                </div>
            </div>
            <div style={ItemStyle.place} key={`item_place_${id}`}>
                <Link to={url} style={ItemStyle.link}>
                    {place}
                </Link>
            </div>
        </div>
    );
};

export default Item;
