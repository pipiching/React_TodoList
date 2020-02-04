import React, { useState, createContext } from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'
import Button from '@material-ui/core/Button';

export const TodoListContext = createContext({});

function TodoList() {
	const [todos, setTodos] = useState([])	
	const divStyle = {
		width: '500px',
		margin: 'auto',
		textAlign: 'center',
	}; 

	return(
		<TodoListContext.Provider value={{ todos, setTodos}}>
			<div style={divStyle}>
				<TodoForm />
				<TodoItem/>
				<Button variant="contained" color="primary"  onClick={()=> setTodos([])}>
					reset
				</Button>
			</div>
		</TodoListContext.Provider>
	)
}

export default TodoList