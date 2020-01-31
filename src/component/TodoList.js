import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

export const TodoListContext = React.createContext({});

function TodoList() {
	const [todos, setTodos] = useState([])	
	const divStyle = {
		width: '250px',
		margin: 'auto',
		textAlign: 'center',
	}; 

	return(
		<TodoListContext.Provider value={{ todos, setTodos}}>
			<div style={divStyle}>
				<TodoForm />
				<TodoItem/>
				<button onClick={()=> setTodos([])}>
					reset
				</button>
			</div>
		</TodoListContext.Provider>
	)
}

export default TodoList