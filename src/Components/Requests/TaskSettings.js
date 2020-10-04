import React, { Fragment } from 'react';

export default function Tasksettings ({ task, title, desc, date }) {
	const today = new Date();

	const RequestTask = (task) => {
		let Task;
		switch (task) {
			case 'Choice Task':
				Task = <ChoiceTask />;
				break;
			case 'Decision-Making Task':
				Task = <DecisionMakingTask />;
				break;
			case 'Sentence-Level Task':
				Task = <SentenceLevelTask />;
				break;
			default:
				console.error('Unexpected error');
		}
		return Task;
	};

	return (
		<div className="new-request-settings">
			<div className="new-request-settings-text">Setting up your Task</div>
			<div className="new-request-settings-content">
				<div className="new-request-title">{title || 'Title'}</div>
				<div className="new-request-desc">{desc || 'Description'}</div>
				<div className="new-request-date">Expires on : {date || `${today.getFullYear()}-${today.getMonth()}-${today.getDay()}`}</div>
			</div>
			{RequestTask(task)}
		</div>
	);
}

const ChoiceTask = () => {
	const questions = [
		{
			question : 'How many years of experience do you have in React?',
			answer   : [ 'Less than a year', '1-2 years', '3-4 years', 'More than 4 years' ]
		},
		{
			question : "What's your favourite language?",
			answer   : [ 'English', 'JavaScript', 'French', 'German' ]
		}
	];
	return (
		<div className="choice-task">
			{questions.map(({ question, answer }, index) => {
				return (
					<div className="choice-task-row" key={index}>
						<div className="question">{question}</div>
						<div className="answer">
							<Radio options={answer} name={`answer${index}`} />
						</div>
					</div>
				);
			})}
		</div>
	);
};

const DecisionMakingTask = () => {
	const questions = [
		{
			question : 'Programmers have no life.',
			answer   : true
		},
		{
			question : "Programmers live under their parent's basement",
			answer   : true
		},
		{
			question : 'Programmers go out and have a social life',
			answer   : false
		}
	];

	return (
		<div className="decision-making-task">
			{questions.map(({ question }, index) => {
				return (
					<div className="decision-making-task-row" key={index}>
						<div className="question">{question}</div>
						<div className="answer">
							<Radio options={[ true, false ]} name={`answer${index}`} />
						</div>
					</div>
				);
			})}
		</div>
	);
};

const SentenceLevelTask = () => {
	const questions = [
		'Which JavaScript frameworks do you like the most? Why?',
		'Can you explain the 2 pillars of JavaScript.',
		'Explain how useEffect works in React'
	];
	return (
		<div className="sentence-level-task">
			{questions.map((question, index) => {
				return (
					<div className="sentence-level-task-row" key={index}>
						<div className="question">{question}</div>
						<div className="answer">
							<textarea name={`answer${index}`} required />
						</div>
					</div>
				);
			})}
		</div>
	);
};

const Radio = ({ options = [], name }) => {
	const answer = options.map((option, index) => (
		<Fragment key={index}>
			<input id={`name_${index}`} type="radio" name={name} value={option} required />
			<label htmlFor={`name_${index}`}>{`${option}`}</label>
		</Fragment>
	));
	return answer;
};
