import { render, screen } from "@testing-library/react"
import { Tarea05 } from "../src/Tarea05"

describe('Prueba <Tarea05 />', () => {

  const title = 'Hola, soy Eduardo'
  const subtitle = 'Un subtitulo por props'
  
  test('debe ser match con el snapshot', () => { 
   
    const { container } = render( <Tarea05 title={ title } /> )
    expect( container ).toMatchSnapshot()

  })

  test('debe mostrar el mensaje "Hola, soy Eduardo', () => { 

    const { container } = render( <Tarea05 title={ title } /> )
    expect( screen.getByText(title) ).toBeTruthy()
    // screen.debug()

  })

  test('debe mostrar el titulo en un H1', () => { 

    render( <Tarea05 title={ title } /> )
    expect( screen.getByRole('heading', { level: 1}).innerHTML ).toContain(title)
    // screen.debug()

  })

  test('debe mostrar el subtitulo enviado por props', () => { 

    render( 
      <Tarea05 
        title={title} 
        subtitle={subtitle}
      />
    )

    expect( screen.getAllByText(subtitle).length ).toBe(2)
    // screen.debug()

  })

})
