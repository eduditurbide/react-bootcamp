import {render, screen} from '@testing-library/react'
import { GifItem } from '../../src/components/GifItem'

describe('Test de <GitItem/>', () => { 

  const title = 'Saitama'
  const url = 'https://one-punch.com/saitama.jpg'

  /** Test 1 */
  test('debe de hacer match con el snaptshot', () => { 
    const {container} = render(<GifItem title={title} url={url} />)
    expect(container).toMatchSnapshot()
  })

  /** Test 2 */
  test('debe de mostrar la imagen con el URL y el ALT indicado', () => {

    render(<GifItem title={title} url={url} />)
    // screen.debug()
    const {src, alt} = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)

  })

  /** Test 3 */
  test('debe de mostrar el titulo en el componente', () => {

    render(<GifItem title={title} url={url} />)
    expect(screen.getByText(title)).toBeTruthy()

  })

})