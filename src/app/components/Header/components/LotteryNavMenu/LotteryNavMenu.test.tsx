import React from 'react'
import { render } from '@testing-library/react'

import {LotteryNavMenu} from './LotteryNavMenu';

describe('LotteryNavMenu', () => {
  it('should render', () => {
    render(
      <LotteryNavMenu />
    )
  })
  
  it('should render Sportsbook', () => {
    const {getByText} = render(
      <LotteryNavMenu />
    )
    expect(getByText('Sportsbook')).toBeTruthy();
  })
})
