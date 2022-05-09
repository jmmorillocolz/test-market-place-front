import { FC } from 'react';
import Search from '../Search/Search';
import { HeaderStyles } from './HeaderStyles';
import meli from '../../assets/icons/meli.svg';
import { useNavigate } from 'react-router-dom';

const Header: FC = (): JSX.Element => {
    const navigate = useNavigate();

    /**
     * Search
     * @returns {void}
     */
    const search = (value: string): void => {
        navigate(`/items?search=${value}`);
    };

    return (
        <div style={HeaderStyles.header} key={'header-principal'}>
            <div style={HeaderStyles.container}>
                <div style={HeaderStyles.logo}>
                    <img src={meli} alt={'MercadoLibre'} height={40} />
                </div>
                <div style={HeaderStyles.inputSearch}>
                    <Search onClick={search} />
                </div>
            </div>
        </div>
    );
};

export default Header;
