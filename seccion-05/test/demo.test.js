describe('Pruebas en <DemoComponent/>', () => {
  
  test('Esta prueba no debe fallar', () => {
    
    // 1. inicialización
    const message1 = 'Hola mundo'
  
    // 2. estímulo
    const message2 = message1.trim()
  
    // 3. observar el comportamiento... esperado
    expect( message1 ).toBe( message2 )
  
  })

})
