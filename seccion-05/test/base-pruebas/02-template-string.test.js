import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('Pruebas en 02-template-string', () => {
  
  test('getSaludo debe de retornar "Hola Eduardo"', () => {
    
    // 1. inicialización
    const name = 'Eduardo'
  
    // 2. estímulo
    const message = getSaludo(name)
  
    // 3. observar el comportamiento... esperado
    expect( message ).toBe( `Hola ${ name }` )

  })

})
