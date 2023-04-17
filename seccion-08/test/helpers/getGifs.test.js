import {render, screen} from '@testing-library/react'
import { getGifs } from '../../src/helpers/getGifs';
import { string } from 'prop-types';

describe('Test en getGifs()', () => { 

  /** Test 1 */
  test('debe de retornar un arreglo de gifts', async() => {

    const gifts = await getGifs('One Punch')
    expect(gifts.length).toBeGreaterThan(0)
    expect(gifts[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    })

  })

})