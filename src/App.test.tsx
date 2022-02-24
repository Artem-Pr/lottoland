import React from 'react'
import { render } from '@testing-library/react'

import App from './App'

jest.mock('./app/pages/MainPage', () => ({
  MainPage: () => <div>MainPage</div>,
}))

jest.mock('./app/components', () => ({
  Header: () => <div>Header</div>,
}))

describe('App', () => {
  it('should render App', () => {
    render(
      <App />
    )
  })
  
  it('should render MainPage', () => {
    const {getByText} = render(
      <App />
    )
    expect(getByText('MainPage')).toBeTruthy();
  })
  
  it('should render Header', () => {
    const {getByText} = render(
      <App />
    )
    expect(getByText('Header')).toBeTruthy();
  })
})
