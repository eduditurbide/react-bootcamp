import {renderHook, waitFor} from '@testing-library/react'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

describe('Test useFetchGifs', () => { 

  /** Test 1 */
  test('debe de regresar el estado inicial', () => {

    const {result} = renderHook(() => useFetchGifs('One Punch'))
    // console.log(result);
    const {images, isLoading} = result.current 
    expect(images.length).toBe(0)
    expect(isLoading).toBeTruthy()

  })

   /** Test 2 */
   test('debe de retornar un arreglo de images y el isLoading en false ', async() => {

    const {result} = renderHook(() => useFetchGifs('One Punch'))
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0)
    )
    const {images, isLoading} = result.current 
    expect(images.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()

  })

})