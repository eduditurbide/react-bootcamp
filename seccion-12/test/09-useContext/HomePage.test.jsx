import { render, screen } from '@testing-library/react'
import { HomePage } from '../../src/09-useContext'
import { UserContext } from '../../src/09-useContext/context/UserContext'

describe('Pruebas en <HomePage/>', () => {

    const user = {
         id: 1,
         name: "Eduardo"
    };

    /** Test 1 */
    test('debe de mostrar el componente sin el usuario', () => { 
        
        render(
            <UserContext.Provider value={{user: null}}>
                <HomePage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toBe('null')

    })

    /** Test 2 */
    test('debe de mostrar el componente con el usuario', () => { 
        
        render(
            <UserContext.Provider value={{user: user}}>
                <HomePage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')
        // screen.debug()
        // console.log(preTag.innerHTML);
        expect(preTag.innerHTML).toContain(user.name)
        expect(preTag.innerHTML).toContain(`${user.id}`)

    })
    
})