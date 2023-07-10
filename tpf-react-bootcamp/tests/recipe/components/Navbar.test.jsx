import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from 'react-router-dom'
import { Navbar } from "../../../src/recipe/components/Navbar"
import { AuthContext } from "../../../src/auth/context"

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}))

describe('Probando el componente <Navbar  />', () => { 

  const contextValue = {
    logged: true,
    user: {
      email: 'email@testing.com'
    },
    logout: jest.fn()
  }

  beforeEach(() => jest.clearAllMocks())

  /** Test 1 */
  test('debería de renderizar el navbar', () => { 

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getByText(`Bienvenido ${contextValue.user.email}`)).toBeTruthy();
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
    
    const logoutBtn = screen.getByRole('button', {name: 'Salir'});
    fireEvent.click(logoutBtn)

    expect(contextValue.logout).toHaveBeenCalledTimes(1)
    expect(mockedUseNavigate).toHaveBeenCalledWith("/auth/login", { "replace": true })

  })

})