import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('Pruebas en el todoReducer', () => {

  const initialState = [{
    id: 1,
    description: 'Demo Todo',
    done: false
  }]

  /** Test 1 */
  test('debe de regresar el estado inicial', () => {

    const newState = todoReducer(initialState, {})
    expect(newState).toBe(initialState)

  })

  /** Test 2 */
  test('debe de agregar un todo', () => {
    
    const action = {
      type: '[TODO] Add Todo',
      payload: {
        id: 2,
        description: 'new Todo',
        done: false,
      }
    }

    const newState = todoReducer(initialState, action)
    expect(newState.length).toBe(2)
    expect(newState).toContain(action.payload)

  })

  /** Test 3 */
  test('debe de eliminar un todo', () => {
    
    const action = {
      type: '[TODO] Remove Todo',
      payload: 1
    }

    const newState = todoReducer(initialState, action)
    expect(newState.length).toBe(0)

  })

  /** Test 4 */
  test('debe de realizar el toggle del todo', () => {

    const action = {
      type: '[TODO] Toggle Todo',
      payload: 1
    }
    
    const newState = todoReducer(initialState, action)
    expect(newState.length).toBe(1)
    expect(newState[0].done).toBeTruthy()

  })
})