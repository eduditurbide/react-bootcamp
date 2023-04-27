import { render, screen, fireEvent } from '@testing-library/react'
import { TodoItem } from '../../src/08-useReducer/TodoItem'
describe('Pruebas en el <TodoItem/> ', () => {

    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    }

    const onDeleteTodoMock = jest.fn()
    const onToggleTodoMock = jest.fn()

    beforeEach(() => jest.clearAllMocks())

    /** Test 1 */
    test('debe de mostrar el Todo Pendiente de completar', () => {

        render( 
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        )

        const liElement = screen.getByRole('listitem')
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('align-self-center')
        expect(spanElement.className).not.toContain('text-decoration-line-through')

    })

    /** Test 2 */
    test('debe de mostrar el Todo completado', () => {

        todo.done = true

        render( 
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        )

        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('text-decoration-line-through')

    })

    /** Test 3 */
    test('span debe de llamar el ToggleTodo cuando se haga clic', () => {

        render( 
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        )

        const spanElement = screen.getByLabelText('span')
        fireEvent.click(spanElement)

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)

    })

    /** Test 3 */
    test('el botón debe de llamar el DeleteTodo cuando se haga clic', () => {

        render( 
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        )

        const deleteButton = screen.getByRole('button')
        fireEvent.click(deleteButton)

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)

    })

})