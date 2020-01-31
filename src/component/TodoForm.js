import React, { useContext, useState } from 'react'
import { TodoListContext } from './TodoList'

function TodoForm() {
	const [value, setValue] = useState("")
	const {todos, setTodos} = useContext(TodoListContext);

	const PushAndReset =  key => {
		if (value !== '' && key === "Enter"){
			setTodos([ ...todos, {id: todos.length, value, status: false} ]); 
			setValue(""); 
		}
	}	
	const handleChange = e => {
		setValue(e.target.value);
	}

	return (
		<div>
			<input type="text" name="todoItem" value={value} 
				onChange={e => handleChange(e)} onKeyPress={ e => PushAndReset(e.key)} />
			<button type="button" value="submit" onClick={ () => PushAndReset("Enter") } >
				submit
			</button>		
		</div>
	)
}

export default TodoForm