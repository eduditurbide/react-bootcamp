import {render, screen} from '@testing-library/react'
import { GifExpertApp } from '../src/GifExpertApp'

describe('Pruebas en <GifExpertApp/>', () => {

  const title = 'GIF expert app'
  const text = 'Goku'

  /** Test 01 */
  test('debe de contener un titulo con H1 ', () => {

    render(<GifExpertApp />)
    // screen.debug()
    expect(screen.getByRole('heading', { level: 1}).innerHTML).toBe(title)

  })

})