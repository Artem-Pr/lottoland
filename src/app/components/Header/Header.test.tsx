import React from 'react'
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react'

import {Header} from './Header';

jest.mock('./components', () => ({
  MainMenu: () => <div>MainMenu</div>,
  LotteryNavMenu: () => <div>LotteryNavMenu</div>,
}))

jest.mock('./Header.module.scss', () => ({
  MenuButton: 'mocked-menu-button',
}));

describe('Header', () => {
  afterEach(() => {
    jest.clearAllMocks();
  })
  
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
  
  it('should not render Drawer (render LotteryNavMenu once)', () => {
    render(
      <Header />
    )
    expect(screen.queryAllByText('LotteryNavMenu')).toHaveLength(1)
  })
  
  it('should open Drawer (render LotteryNavMenu twice)', async () => {
    const {container} = render(
      <Header />
    )
    const menuButton = container.querySelector('.mocked-menu-button');
    menuButton && fireEvent.click(menuButton);
    await waitFor(() => {
      expect(screen.queryAllByText('LotteryNavMenu')).toHaveLength(2)
    })
  })
})
