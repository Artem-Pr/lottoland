import React from 'react';

import {render} from '@testing-library/react';

import {EmptyCartMessage} from './EmptyCartMessage';

describe('EmptyCart', () => {
    it('should render', () => {
        render(
            <EmptyCartMessage />,
        );
    });
    it('should render "Your cart is empty"', () => {
        const {getByText} = render(
            <EmptyCartMessage />,
        );
        expect(getByText('Your cart is empty')).toBeTruthy();
    });
});
