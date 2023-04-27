import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { MainApp } from '../../src/09-useContext'

describe('Pruebas en el componente <MainApp/>', () => {

    /** Test 1 */
    test('debe de mostrar el HomePage', () => {

        render(
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
        )

        // screen.debug()
        expect(screen.getByText('HomePage')).toBeTruthy()
    })

    /** Test 2 */
    test('debe de mostrar el LoginPage', () => {

        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp/>
            </MemoryRouter>
        )

        // screen.debug()
        expect(screen.getByText('LoginPage')).toBeTruthy()
    })
    
    /** Test 3 */
    test('debe de mostrar el AboutPage', () => {

        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp/>
            </MemoryRouter>
        )

        // screen.debug()
        expect(screen.getByText('AboutPage')).toBeTruthy()
    })
})