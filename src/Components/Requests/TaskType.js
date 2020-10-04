import React, { Fragment } from 'react';

export default function Tasktype ({ types, task, change }) {
	const tasks = types.map((type, index) => (
		<Fragment key={index}>
			<input type="radio" id={`task${index}`} name="task" value={type} checked={task === type} onChange={change} />
			<label htmlFor={`task${index}`}>{type}</label>
		</Fragment>
	));

	return (
		<div className="new-requests">
			<div className="new-requests-title">New Requester Task</div>
			<div className="new-requests-type">
				<div className="new-requests-text">Select Task Type:</div>
				<div className="task-types">{tasks}</div>
			</div>
		</div>
	);
}
