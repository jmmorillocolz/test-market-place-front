import loader from '../../assets/icons/loader.svg';
import { LoaderStyle } from './LoaderStyle';

interface ILoader {
    hidden: boolean;
}

/**
 * Loader
 */
const Loader = ({ hidden = true }: ILoader): JSX.Element => {
    return (
        <div
            style={
                hidden
                    ? { ...LoaderStyle.container, ...{ visibility: 'hidden' } }
                    : LoaderStyle.container
            }>
            <img src={loader} alt={'Cargando...'} style={LoaderStyle.image} />
        </div>
    );
};

export default Loader;
