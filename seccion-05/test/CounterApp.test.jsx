import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Test <CounterApp />', () => {

  const valorInicial = 100
  
  test('debe ser match con el snapshot', () => { 
   
    const { container, getByText } = render( <CounterApp value={ valorInicial }/>  )
    expect( container ).toMatchSnapshot()

  })

  test('debe de mostrar el valor inicial de 100', () => { 
   
    render( <CounterApp value={ valorInicial }/>  )
    expect( screen.getByText(100) ).toBeTruthy()
    expect( screen.getByRole('heading', { level: 3}).innerHTML ).toContain(`${valorInicial}`)

  })

  test('debe de incrementar con el botón +1', () => { 
    
    render( <CounterApp value={ valorInicial }/>  )
    fireEvent.click( screen.getByText('+1') )
    expect( screen.getByText(101) ).toBeTruthy()

  })

  test('debe de decrementar con el botón -1', () => { 
    
    render( <CounterApp value={ valorInicial }/>  )
    fireEvent.click( screen.getByText('-1') )
    expect( screen.getByText(99) ).toBeTruthy()

  })

  test('debe de volver al valor inicial con el botón reset', () => { 
    
    render( <CounterApp value={ valorInicial }/>  )
    fireEvent.click( screen.getByText('+1') )
    fireEvent.click( screen.getByText('+1') )
    fireEvent.click( screen.getByText('+1') )

    // fireEvent.click( screen.getByText('Reset') )
    // expect( screen.getByText(valorInicial) ).toBeTruthy()
    
    fireEvent.click( screen.getByRole('button', {name: 'btn-reset'}) )
    expect( screen.getByText(valorInicial) ).toBeTruthy()

  })
  
})
