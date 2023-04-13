import { getHeroByIdAsync as getHeroByIdAsync } from "../../src/base-pruebas/09-promesas"

describe('Pruebas en 09-promesas', () => {
  
  test('getHeroByIdAsync debe de retornar un hero ', (done) => { 
    const id = 1
    
    getHeroByIdAsync( id )
    .then( hero => {
      expect( hero ).toEqual({
        id: 1,
        name: 'Batman',
        owner: 'DC'
      })
      done()
    })

  })

  test('getHeroByIdAsync debe de retornar si hero no existe', (done) => {
    const id = 100
    
    getHeroByIdAsync( id )
    .then( hero => {
      expect( hero ).toBeFalsy()
      done()
    })
    .catch( err => {
      expect( err ).toBe( 'No se pudo encontrar el héroe' )
      done()
    })

  })
})
