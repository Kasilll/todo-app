import { createStore, createEvent } from 'effector'

export const $todos = createStore([])

export const addTodo = createEvent();
export const delTodo = createEvent();

const handleDelTodo = (state, delId) => state.filter((el) => el.id !== delId)

$todos.on(addTodo, (state, newTodo) => [...state, newTodo]).on(delTodo, handleDelTodo)
