import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => {
  
  test('getUser debe de retornar un objeto ', () => {

    // 1.
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    // 2.
    const user = getUser()

    // 3.
    expect( testUser ).toStrictEqual( user )
    
  })  

  test('getUsuarioActivo debe de retornar un objeto ', () => {

    // 1.
    const testUsuarioActivo = {
      uid: 'ABC567',
      username: 'eduardo'
    }

    // 2.
    const activeUser = getUsuarioActivo( testUsuarioActivo.username )

    // 3.
    expect( testUsuarioActivo ).toStrictEqual( activeUser )

  })

})
