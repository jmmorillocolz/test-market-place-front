import { Button } from '@material-ui/core';
import { SearchRounded } from '@material-ui/icons';
import { useState } from 'react';
import { SearchStyle } from './SearchStyle';

interface ISearch {
    onClick: (value: string) => void;
}

/**
 * Search component
 * @returns {JSX.Element}
 */
const Search = ({ onClick }: ISearch): JSX.Element => {
    const [value, setValue] = useState<string>('');

    /**
     * fires the event when pressing the Enter key
     * @param {React.KeyboardEvent<HTMLInputElement>} event
     * @returns {void}
     */
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === 'Enter') {
            return onClick(value);
        }
    };

    return (
        <>
            <input
                type={'search'}
                name={'searchHeader'}
                id={'searchHeader'}
                placeholder={'Nunca dejes de buscar'}
                style={SearchStyle.input}
                value={value}
                onKeyDown={(e) => handleKeyPress(e)}
                onChange={(val) => setValue(val.target.value)}
            />
            <Button
                key={'button_search'}
                style={SearchStyle.button}
                type={'button'}
                color={'inherit'}
                startIcon={<SearchRounded />}
                onClick={() => onClick(value)}></Button>
        </>
    );
};

export default Search;
