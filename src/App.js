import React from 'react';
import TodoList from './component/TodoList';

function App() {
	return(
		<div style={{display:"flex", alignItems:"center", justifyContent:"center",width:"100vw", height:"100vh"}}>
			<TodoList />
		</div>
	)
}

export default App;