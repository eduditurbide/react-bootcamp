import {render, screen} from '@testing-library/react'
import { GifGrid } from '../../src/components/GifGrid'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')

describe('Test <GifGrid />', () => { 
  
  const category = 'One Punch'
  const loading = 'Cargando...'
 
  /** Test 1 */
  test('debe de mostrar el loading inicialmente', () => {

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    })

    render(<GifGrid category={category}/>)

    expect(screen.getByText(loading))
    expect(screen.getByText(category))

  })

  /** Test 2 */
  test('debe de mostrar items cuando se cargan las imagenes mediante el useFetchGift', () => {

    const gifts = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'https://localhost/saitama'
      },
      {
        id: 'DEF',
        title: 'Goku',
        url: 'https://localhost/goku'
      }
    ]

    useFetchGifs.mockReturnValue({
      images: gifts,
      isLoading: false,
    })

    render(<GifGrid category={category}/>)
    // screen.debug()

    expect(screen.getAllByRole('img').length).toBe(2)

  })

})