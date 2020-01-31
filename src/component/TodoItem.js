import React, { useContext } from 'react'
import { TodoListContext } from './TodoList'

function TodoItem() {
	const {todos, setTodos} = useContext(TodoListContext);
	const changeStyle = id => {
		setTodos(
			todos.map( (todo, index) =>( index===id ? 
				{...todo, status:!todo.status} : 
				todo)
			)
		);
	}

	return (
		<div>
			<ul>
				{todos.map( ( {value, status}, id )=>
					<li		
						key={id}
						onClick = { () => changeStyle(id) }
						style={
							status ? 
							{ textDecoration: 'line-through' } : 
							{ textDecoration: 'none' }
						}
					>
						{value}
					</li>							
				)}
			</ul>
		</div>
	)
}

export default TodoItem