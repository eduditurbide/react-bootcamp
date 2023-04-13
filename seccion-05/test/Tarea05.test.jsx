import { render } from "@testing-library/react"
import { Tarea05 } from "../src/Tarea05"

describe('Prueba <Tarea05 />', () => {
  
  // test('debe de hacer match con el shapshot', () => {  
  //   const title = 'Hola soy Goku'
  //   const { container } = render( <Tarea05 title={title}/> )
  //   // console.log('container', container)

  //   expect( container ).toMatchSnapshot()
  // })

  test('debe mostrar el titulo en un H1', () => { 
   
    const title = 'Hola soy Goku'
    const { container, getByText, getByTestId } = render( <Tarea05 title={title} /> )
    expect( getByText(title) ).toBeTruthy()

    // const h1 = container.querySelector('h1')
    // expect(h1.innerHTML).toContain( title )

    expect( getByTestId( 'test-title').innerHTML ).toContain( title )

  })

  test('debe de mostrar el subtitulo enviado por props', () => { 
    const title = 'Hola soy Goku'
    const subtitle = 'Un subtitulo por props'
    const { getAllByText } = render( 
      <Tarea05 
        title={title} 
        subtitle={subtitle}
      />
    )

    expect( getAllByText(subtitle).length ).toBe(2)
  })

})
