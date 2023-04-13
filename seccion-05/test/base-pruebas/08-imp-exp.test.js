import { getHeroById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"

describe('Pruebas en 08-imp-exp', () => {
  test('getHeroesById debe de retornar un hero por ID', () => {
    
    const id = 1
    const hero = getHeroById( id )

    expect( hero ).toEqual( { id: 1, name: 'Batman', owner: 'DC' } )

  })    

  test('getHeroesById debe de retornar undefined si no existe el ID', () => {
    
    const id = 100
    const hero = getHeroById( id )

    expect( hero ).toBeFalsy()

  })

  test('getHeroesByOwner debe de retornar arreglo con los heroes de DC', () => {
    
    const owner = 'DC'
    const ownerList = getHeroesByOwner(owner)

    expect( ownerList.length ).toBe( 3 )
    expect( ownerList ).toEqual( [
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' }
    ] )
    expect( ownerList ).toEqual( ownerList.filter( (hero) => hero.owner === owner ) )

  })

  test('getHeroesByOwner debe de retornar arreglo con los heroes de Marvel', () => {
    
    const owner = 'Marvel'
    const ownerList = getHeroesByOwner(owner)

    expect( ownerList.length ).toBe( 2 )
    expect( ownerList ).toEqual( ownerList.filter( (hero) => hero.owner === owner ) )


  })
  
})
