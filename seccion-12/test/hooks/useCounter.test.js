import { renderHook, act } from '@testing-library/react'
import { useCounter } from '../../src/hooks/useCounter'

describe('Pruebas en useCounter', () => {
  
  const initNumber = 100
  const testNumber1 = 1
  const testNumber2 = 2

  /** Test 1 */
  test('debe de retornar los valores por defecto', () => { 
    const {result} = renderHook(() => useCounter())
    const {counter, decrement, increment, reset} = result.current

    expect(counter).toBe(10)
    expect(decrement).toEqual(expect.any(Function))
    expect(increment).toEqual(expect.any(Function))
    expect(reset).toEqual(expect.any(Function))
  })

  /** Test 2 */
  test('debe de generar el counter con el valor de 100', () => {
    const {result} = renderHook(() => useCounter(initNumber))
    const {counter} = result.current

    expect(counter).toBe(initNumber)
  })

  /** Test 3 */
  test('debe de incrementar el contador', () => {
    const {result} = renderHook(() => useCounter(initNumber))
    const {increment} = result.current

    act(() => {
      increment(testNumber1)
      increment(testNumber2)
    })

    expect(result.current.counter).toBe(
      initNumber + testNumber1 + testNumber2
    )
  })

  /** Test 4 */
  test('debe de decrementar el contador', () => {
    const {result} = renderHook(() => useCounter(initNumber))
    const {decrement} = result.current

    act(() => {
      decrement(testNumber1)
      decrement(testNumber2)
    })

    expect(result.current.counter).toBe(
      initNumber - testNumber1 - testNumber2
    )
  })

  /** Test 5 */
  test('debe de resetear el contador', () => {
    const {result} = renderHook(() => useCounter(initNumber))
    const {reset, increment, decrement} = result.current

    act(() => {
      decrement(testNumber1)
      increment(testNumber2)
      reset()
    })

    expect(result.current.counter).toBe(initNumber)
  })
})