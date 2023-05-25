import { types } from "../../../src/auth/types/types"

describe('Pruebas en "types.js"', () => { 

  /** Test 1 */
  test('debe de regresar estos types', () => { 
    
    expect(types).toEqual({ 
      login: '[Auth] Login', 
      logout: '[Auth] Logout' 
    })

  })

})