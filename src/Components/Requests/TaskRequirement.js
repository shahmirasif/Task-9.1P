import React from 'react';

export default function TaskRequirement () {
	return (
		<div className="new-request-requirements">
			<div className="new-request-requirements-text">Worker Requirement</div>
			<div className="new-request-requirements-content">
				<div className="new-request-requirements-row">
					<div className="question">Require Master Workers</div>
					<div className="answer">
						<input id="master-worker-yes" type="radio" name="master-workers" value={true} />
						<label htmlFor="master-worker-yes">Yes</label>

						<input id="master-worker-no" type="radio" name="master-workers" value={false} checked />
						<label htmlFor="master-worker-no">No</label>
					</div>
				</div>
				<div className="new-request-requirements-row">
					<div className="question">Reward per response</div>
					<div className="answer">
						<input type="text" name="reward" />
					</div>
				</div>
				<div className="new-request-requirements-row">
					<div className="question">Number of workers</div>
					<div className="answer">
						<input type="text" name="numOfWorkers" />
					</div>
				</div>
			</div>
		</div>
	);
}
