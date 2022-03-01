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
            <MainMenu
                showSearchField={true}
                onSearchButtonClick={() => {}}
            />,
        );
    });

    it('should not render search field', () => {
        render(
          <MainMenu
            showSearchField={false}
            onSearchButtonClick={() => {}}
          />,
        );
        expect(screen.queryByText(/Search for Lottoland products/i)).toBeFalsy();
    });

    it('should render the search field after clicking the search button', async () => {
        const {container} = render(
          <MainMenu
            showSearchField={true}
            onSearchButtonClick={() => {}}
          />,
        );
        const searchButton = container.querySelector('.mocked-search-button');
        searchButton && fireEvent.click(searchButton);
        await waitFor(() => {
            expect(screen.queryByText('Search for Lottoland products')).toBeTruthy();
        })
    });
    
    it('should not render EmptyCartMessage', async () => {
        render(
          <MainMenu
            showSearchField={true}
            onSearchButtonClick={() => {}}
          />,
        );
        await waitFor(() => {
            expect(screen.queryByText('EmptyCartMessage')).toBeFalsy()
        })
    })

    it('should render EmptyCartMessage when hovering mouse over cart', async () => {
        const {container} = render(
          <MainMenu
            showSearchField={true}
            onSearchButtonClick={() => {}}
          />,
        );
        const headerMenuItem = container.querySelector('.mocked-header-menu-item');
        headerMenuItem && fireEvent.mouseOver(headerMenuItem);
        await waitFor(() => {
            expect(screen.queryByText('EmptyCartMessage')).toBeTruthy()
        })
    })

    it('should call onSearchButtonClick', async () => {
        const onClick = jest.fn(() => {})
        const {container} = render(
          <MainMenu
            showSearchField={false}
            onSearchButtonClick={onClick}
          />,
        );
        const searchButton = container.querySelector('.mocked-search-button');
        searchButton && fireEvent.click(searchButton);
        expect(onClick).toBeCalled();
    })
})
