import React from 'react';
import './request.scss';

export default function RequestCard ({ cards }) {
	const Cards = cards.map(({ img, imgAlt, name, desc }, index) => (
		<div className="request-card" key={index}>
			<img src={img} alt={imgAlt} loading="lazy" />
			<h3>{name}</h3>
			<p>"{desc}"</p>
		</div>
	));

	return <div className="request-cards-container">{Cards}</div>;
}
