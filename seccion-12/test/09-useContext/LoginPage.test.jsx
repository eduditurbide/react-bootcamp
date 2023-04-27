import { render, screen, fireEvent } from '@testing-library/react'
import { LoginPage } from '../../src/09-useContext'
import { UserContext } from '../../src/09-useContext/context/UserContext'

describe('Pruebas en <LoginPage />', () => {

    /** Test 1 */
    test('debe de mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage />
            </UserContext.Provider>
        )

        // screen.debug()
        const preElement = screen.getByLabelText('pre')
        expect(preElement.innerHTML).toBe('null');

        const buttonElement = screen.getByRole('button')
        expect(buttonElement.innerHTML).toBe('Establecer usuario')
        expect(buttonElement.className).toBe('btn btn-primary')

    })

    /** Test 2 */
    test('debe de llamar el setUser cuando se hace click en el botón', () => {

        const setUserMock = jest.fn()

        render(
            <UserContext.Provider value={{user: null,setUser: setUserMock}}>
                <LoginPage />
            </UserContext.Provider>
        )

        const buttonElement = screen.getByRole('button')
        fireEvent.click(buttonElement)

        expect(setUserMock).toHaveBeenCalledWith({"email": "eduardo@google.com", "id": 123, "name": "Eduardo"})

    })
    
})