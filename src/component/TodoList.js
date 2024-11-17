import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton, Card, CardContent } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
	const [task, setTask] = useState('');
	const [tasks, setTasks] = useState([]);

	const handleAddTask = () => {
		if (task.trim()) {
			setTasks([...tasks, task]);
			setTask('');
		}
	};

	const handleDeleteTask = (index) => {
		const newTasks = tasks.filter((_, i) => i !== index);
		setTasks(newTasks);
	};

	return (
		<div className='flex-body'>
			<TextField
				label="Новая задача"
				variant="outlined"
				value={task}
				onChange={(e) => setTask(e.target.value)}
			/>
			<Button onClick={handleAddTask} variant="contained" color="primary">
				Добавить
			</Button>
			<List>
				{tasks.map((task, index) => (
					<ListItem key={index}>
						<Card variant="outlined" style={{ width: '100%' }}>
							<CardContent>
								<ListItemText primary={task} />
								<IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(index)}>
									<DeleteIcon />
								</IconButton>
							</CardContent>
						</Card>
					</ListItem>
				))}
			</List>
		</div>
	);
};

export default TodoList;
