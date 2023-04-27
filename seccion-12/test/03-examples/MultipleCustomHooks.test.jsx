import { render, fireEvent, screen } from '@testing-library/react'
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useCounter, useFetch } from '../../src/hooks'

jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')

describe('Pruebas en <MultipleCustomHooks/>', () => {
  
  const mockIncrement = jest.fn()
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement
  })

  beforeEach(() => {
    jest.clearAllMocks()
  })

  /** Test 1 */
  test('debe de mostrar el componente por defecto', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    })
    
    render(<MultipleCustomHooks />) 

    expect(screen.getByText('Rick & Morty Characters'))
    expect(screen.getByText('Loading ...'))
    expect(screen.getByText('Next image'))

    const nextBtn = screen.getByRole('button', {name: 'Next image'})
    expect(nextBtn.disabled).toBeTruthy()
    
    // screen.debug()
  })

  /** Test 2 */
  test('debe de mostrar una imagen', () => {
    useFetch.mockReturnValue({
      data: {name: 'Rick', image: 'https://imagen.com/01.jpg'},
      isLoading: false,
      hasError: null,
    })

    render(<MultipleCustomHooks />) 

    expect(screen.getByText('Rick & Morty Characters'))
    expect(screen.getByText('Rick')).toBeTruthy()

    const nextBtn = screen.getByRole('button', {name: 'Next image'})
    expect(nextBtn.disabled).toBeFalsy()

    // screen.debug()
  })

  /** Test 3 */
  test('debe de llamar la función de incrementar', () => {

    useFetch.mockReturnValue({
      data: {name: 'Rick', image: 'https://imagen.com/01.jpg'},
      isLoading: false,
      hasError: null,
    })

    render(<MultipleCustomHooks />)

    const nextBtn = screen.getByRole('button', {name: 'Next image'})
    fireEvent.click(nextBtn)

    expect(mockIncrement).toHaveBeenCalled()

  })

})