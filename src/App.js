import React from 'react';
import './App.css';
import Message from './component/Message';
import CommentsList from './component/CommentList';
import TemperatureConverter from './component/TemperatureConverter'; // Импорт температурного конвертера
import TodoList from './component/TodoList';


function App() {
	return (
		<div className="App">
			<Message text="Ваша задача в статусе 'ПУ-ПУ-ПУ'" />
			<Message text="Ожидайте..." />
			<CommentsList />
			<div className="hw-3">
				<h2>Температурный конвертер</h2>
				<div className="hw-3__body">
					<TemperatureConverter /> { }
				</div>
				<h2>Список дел</h2>
				<div className="hw-3__body">
					<TodoList /> { }
				</div>
			</div>
		</div>

	);
}

export default App;
