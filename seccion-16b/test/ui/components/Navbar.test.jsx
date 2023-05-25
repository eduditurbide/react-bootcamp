import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter, useNavigate } from 'react-router-dom'
import { Navbar } from '../../../src/ui'
import { AuthContext } from '../../../src/auth'

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}))

describe('Pruebas en <Navbar  />', () => {

  const contextValue = {
    logged: true,
    user: {
      id: '123',
      name: 'Eduardo'
    },
    logout: jest.fn()
  }

  beforeEach(() => jest.clearAllMocks())

  /** Test 1 */
  test('debe de mostrar el nombre del usuario logeado', () => { 

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar  />
       </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Eduardo')).toBeTruthy()

  })

  /** Test 2 */
  test('debe de llamar el logout y navigate cuando se hace click en el botón', () => { 

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    const logoutBtn = screen.getByRole('button')
    fireEvent.click(logoutBtn)

    expect(contextValue.logout).toHaveBeenCalledTimes(1)
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login", { "replace": true })

  })

})