import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Loader from './Loader';

describe('Item test', () => {
    it('click', async () => {
        render(
            <BrowserRouter>
                <Loader hidden={false} />
            </BrowserRouter>
        );
        expect(screen.getByAltText(/Cargando\.\.\./i)).toBeInTheDocument();
    });
});
