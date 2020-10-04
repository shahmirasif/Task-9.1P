import React, { useState } from 'react';
import TaskType from './Components/Requests/TaskType';
import TaskDescription from './Components/Requests/TaskDescription';
import Tasksettings from './Components/Requests/TaskSettings';
import TaskRequirement from './Components/Requests/TaskRequirement';

export default function Requests () {
	const [ task, setTask ] = useState('Choice Task');
	const [ title, setTitle ] = useState('');
	const [ desc, setDesc ] = useState('');
	const [ expDate, setExpDate ] = useState('');
	const types = [ 'Choice Task', 'Decision-Making Task', 'Sentence-Level Task' ];

	const handleTaskChange = ({ target: { value } }) => {
		setTask(value);
	};

	const handleDescriptionChange = ({ target: { value } }, context) => {
		switch (context) {
			case 'title':
				setTitle(value);
				break;
			case 'description':
				setDesc(value);
				break;
			case 'date':
				setExpDate(value);
				break;
			default:
				console.error('Unexpected Error');
		}
	};

	return (
		<main id="requests">
			<form action="">
				<TaskType types={types} task={task} change={handleTaskChange} />
				<TaskDescription change={handleDescriptionChange} />
				<Tasksettings task={task} title={title} desc={desc} date={expDate} />
				<TaskRequirement />
				<button type="submit">Save</button>
			</form>
		</main>
	);
}