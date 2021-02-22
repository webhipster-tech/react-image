import React from 'react'
import Image from './Image'

describe('Image component', () => {
  it('Should render Image component', () => {
    const component = shallow(
      <Image src='testSrc' className='testClassName'>
        'children'
      </Image>
    )
    expect(component).toMatchSnapshot()
  })
})
