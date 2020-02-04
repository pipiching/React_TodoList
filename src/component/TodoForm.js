import React, { useContext, useState } from 'react'
import { TodoListContext } from './TodoList'
import '../TodoForm.css'

function TodoForm() {
	const [value, setValue] = useState("")
	const {todos, setTodos} = useContext(TodoListContext);
	
	const PushAndReset =  key => 
		( value !== '' && key === "Enter" ) && 
		( setTodos([ ...todos, {id: todos.length, value, status: false} ]) || setValue("") )
		
	const handleChange = e => setValue(e.target.value)

	return (
		<div>
			<span className="input">
				<input type="text" name="todoItem" placeholder="Enter Todolist" value={value} 
					onChange={e => handleChange(e)} onKeyPress={ e => PushAndReset(e.key)} />
				<span></span>
			</span>
		</div>
	)
}

export default TodoForm