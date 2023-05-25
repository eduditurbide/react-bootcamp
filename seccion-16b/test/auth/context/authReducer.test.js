import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types"

describe('Pruebas authReducer', () => { 

  /** Test 1 */
  test('debe de retornar el estado por defecto', () => { 

    const initState = { logged: false }
    const state = authReducer(initState, {})
    expect(state).toEqual(initState)

  })

  /** Test 1 */
  test('debe de (login) llamar el login autenticar y establecer el usuario', () => {

    const action = {
      type: types.login,
      payload: {
        id: '123',
        name: 'Edu'
      }
    }

    const initState = { logged: false }
    const state = authReducer(initState, action)
    expect(state).toEqual({ logged: true, user: action.payload})

  })

  /** Test 1 */
  test('debe de (login) borrar el name del usuario y logged en false', () => {

    const action = {
      type: types.logout
    }

    const initState = { logged: true, user: { id: '123', name: 'Edu'} }
    const state = authReducer(initState, action)
    expect(state).toEqual({ logged: false })
    expect(state).not.toContain({user: { id: '123', name: 'Edu' }})

  })

})