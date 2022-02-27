import React from 'react'
import { render } from '@testing-library/react'

import {EurojackpotResultsTitle} from './EurojackpotResultsTitle'

describe('EurojackpotResultsTitle', () => {
  it('should render', () => {
    render(
      <EurojackpotResultsTitle />
    )
  })
  
  it('should render "Fri 18 Feb"', () => {
    const {getByText} = render(
      <EurojackpotResultsTitle />
    )
    expect(getByText('Fri 25 Feb')).toBeTruthy();
  })
  
  it('should render "2022"', () => {
    const {getByText} = render(
      <EurojackpotResultsTitle />
    )
    expect(getByText('2022')).toBeTruthy();
  })
})
