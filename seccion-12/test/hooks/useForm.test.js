import { renderHook, act } from '@testing-library/react'
import { useForm } from "../../src/hooks/useForm"

describe('Pruebas en useForm', () => {

  const initialForm = { 
    name: 'Eduardo',
    email: 'eduardo@google.com',
  }

  /** Test 1 */
  test('debe de regresar los valores por defecto', () => {
    const {result} = renderHook(() => useForm(initialForm))
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    })
  })

  /** Test 2 */
  test('debe de regresar los valores por defecto', () => {
    const newName = 'Juan'
    const {result} = renderHook(() => useForm(initialForm))
    const {onInputChange} = result.current

    act(() => {
      onInputChange({target: {name: 'name', value: newName}})
    })

    expect(result.current.name).toBe(newName)
    expect(result.current.formState.name).toBe(newName)
  })

  /** Test 3 */
  test('debe de realizar el reset del formulario', () => {
    const newName = 'Juan'
    const {result} = renderHook(() => useForm(initialForm))
    const {onInputChange, onResetForm} = result.current

    act(() => {
      onInputChange({target: {name: 'name', value: newName}})
      onResetForm()
    })

    expect(result.current.name).toBe(initialForm.name)
    expect(result.current.formState.name).toBe(initialForm.name)
  })

})