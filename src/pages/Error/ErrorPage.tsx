import { ErrorStyles } from './ErrorStyle';
import ErrorIcon from '../../assets/icons/ErrorIcon.svg';
import { useParams } from 'react-router-dom';

/**
 * Render page search results
 * @returns {JSX.Element}
 */
const ErrorPage = (): JSX.Element => {
    const { message } = useParams();
    return (
        <div style={ErrorStyles.container}>
            <div style={ErrorStyles.blockInfo}>
                <div style={ErrorStyles.containerImage}>
                    <img src={ErrorIcon} alt={''} style={ErrorStyles.image} />
                </div>
                <div style={ErrorStyles.containerMessage}>{message}</div>
            </div>
        </div>
    );
};

export default ErrorPage;
