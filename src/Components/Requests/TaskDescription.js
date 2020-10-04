import React from 'react';

export default function Taskdescription ({ change }) {
	return (
		<div className="new-request-description">
			<div className="new-request-description-text">Describe your task to Workers</div>
			<div className="new-request-description-content">
				<Label htmlFor="request-title" text="Title">
					<RequestInput label="title" change={change} />
				</Label>
				<Label htmlFor="request-description" text="Description">
					<RequestInput label="description" change={change} />
				</Label>
				<Label htmlFor="request-date" text="Expiry Date">
					<RequestInput type="date" label="date" change={change} />
				</Label>
			</div>
		</div>
	);
}

const RequestInput = ({ type = 'text', label, change }) => {
	return <input type={type} name={label} id={`request-${label}`} onChange={(e) => change(e, label)} required />;
};

const Label = ({ htmlFor, text, children }) => {
	return (
		<div className="description-row">
			<label htmlFor={htmlFor}>{text}</label>
			{children}
		</div>
	);
};
