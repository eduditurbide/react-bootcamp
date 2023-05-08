import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { PublicRoute } from '../../src/router/PublicRoute'
import { AuthContext } from '../../src/auth'

describe('Pruebas en <PublicRoute  />', () => { 

  /** Test 1 */
  test('debe de mostrar el children si no está autenticado', () => { 

    const contextValue = {
      logged:false,
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Ruta pública</h1>
        </PublicRoute>
      </AuthContext.Provider>
    )

    // screen.debug()
    expect(screen.getByText('Ruta pública')).toBeTruthy()

  })

  /** Test 2 */
  test('debe de navegar si está autenticado', () => {

    const contextValue = {
      logged: true,
      user: {
        id: '123',
        name: 'eduardo'
      }
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path='login' element={
              <PublicRoute>
                <h1>Ruta pública</h1>
              </PublicRoute>
            }/>
            <Route  path='marvel' element={<h1>Página Marvel</h1>}/>
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Página Marvel')).toBeTruthy()

  })

})