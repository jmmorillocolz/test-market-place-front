import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Item from './Item';
import { BrowserRouter } from 'react-router-dom';

describe('Item test', () => {
    it('click', async () => {
        const { getByAltText } = render(
            <BrowserRouter>
                <Item
                    id={'1'}
                    price={{ amount: 1500, decimals: 0 }}
                    description={'descripción de prueba'}
                    picture={'http://test.test'}
                    place={'testing'}
                    url={'http://test.test'}
                    key={'test-1'}
                />
            </BrowserRouter>
        );
        expect(screen.getByText(/descripción de prueba/i)).toBeInTheDocument();
        const imagen = getByAltText(/descripción de prueba/i);
        fireEvent.click(imagen);
    });
});
