import React from 'react'
import { render } from '@testing-library/react'

import {Header} from './Header';

jest.mock('./components', () => ({
  MainMenu: () => <div>MainMenu</div>,
  LotteryNavMenu: () => <div>LotteryNavMenu</div>,
}))

describe('Header', () => {
  it('should render', () => {
    render(
      <Header />
    )
  })
  
  it('should render MainMenu', () => {
    const {getByText} = render(
      <Header />
    )
    expect(getByText('MainMenu')).toBeTruthy();
  })
  
  it('should render LotteryNavMenu', () => {
    const {getByText} = render(
      <Header />
    )
    expect(getByText('LotteryNavMenu')).toBeTruthy();
  })
})
