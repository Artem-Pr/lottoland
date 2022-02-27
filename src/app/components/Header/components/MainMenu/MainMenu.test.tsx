import React from 'react'

import {
    fireEvent,
    render,
    screen,
    waitFor,
} from '@testing-library/react'
import {MainMenu} from "./MainMenu";

global.matchMedia = global.matchMedia || (() => ({
    matches: false,
    addListener: jest.fn(),
    removeListener: jest.fn(),
}));

jest.mock('./components', () => ({
    EmptyCartMessage: () => <div>EmptyCartMessage</div>,
}));

jest.mock('./MainMenu.module.scss', () => ({
    headerMenuItem: 'mocked-header-menu-item',
    search: 'mocked-search-button',
}));

describe('Header', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render', () => {
        render(
            <MainMenu />,
        );
    });

    it('should not render search field', () => {
        render(
            <MainMenu />,
        );
        expect(screen.queryByText(/Search for Lottoland products/i)).toBeFalsy();
    });

    it('should render the search field after clicking the search button', async () => {
        const {container} = render(
            <MainMenu />,
        );
        const searchButton = container.querySelector('.mocked-search-button');
        searchButton && fireEvent.click(searchButton);
        await waitFor(() => {
            expect(screen.queryByText('Search for Lottoland products')).toBeTruthy();
        })
    });
    
    it('should not render EmptyCartMessage', async () => {
        render(
            <MainMenu />,
        );
        await waitFor(() => {
            expect(screen.queryByText('EmptyCartMessage')).toBeFalsy()
        })
    })

    it('should render EmptyCartMessage when hovering mouse over cart', async () => {
        const {container} = render(
          <MainMenu />,
        );
        const headerMenuItem = container.querySelector('.mocked-header-menu-item');
        headerMenuItem && fireEvent.mouseOver(headerMenuItem);
        await waitFor(() => {
            expect(screen.queryByText('EmptyCartMessage')).toBeTruthy()
        })
    })
})