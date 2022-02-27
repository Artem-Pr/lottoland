import React from 'react'
import { render } from '@testing-library/react'

import { JackpotNumbers } from './JackpotNumbers'

describe('JackpotNumbers', () => {
  it('should render', () => {
    render(
      <JackpotNumbers
        numbers={[]}
        euroNumbers={[]}
      />
    )
  })

  it('should map 43 in numbers array', () => {
    const {getByText} = render(
      <JackpotNumbers
        numbers={[43]}
        euroNumbers={[]}
      />
    )
    expect(getByText(43)).toBeTruthy();
  })

  it('should map 5 in euroNumbers array', () => {
    const {getByText} = render(
      <JackpotNumbers
        numbers={[]}
        euroNumbers={[5]}
      />
    )
    expect(getByText(5)).toBeTruthy();
  })
})
