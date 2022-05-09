import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

describe('Header test', () => {
    it('click logo header', async () => {
        const { getByAltText } = render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        expect(screen.getByAltText(/MercadoLibre/i)).toBeInTheDocument();
        const logo = getByAltText(/MercadoLibre/i);
        fireEvent.click(logo);
    });
});
