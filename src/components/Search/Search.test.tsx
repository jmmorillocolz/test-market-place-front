import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Search from './Search';

describe('Search Test', () => {
    it('keyDown in input', async () => {
        const { getByPlaceholderText } = render(
            <BrowserRouter>
                <Search onClick={() => console.log('test')} />
            </BrowserRouter>
        );
        const input = getByPlaceholderText(/Nunca dejes de buscar/i);
        expect(screen.getByPlaceholderText(/Nunca dejes de buscar/i)).toBeInTheDocument();
        fireEvent.keyDown(input);
    });
});
