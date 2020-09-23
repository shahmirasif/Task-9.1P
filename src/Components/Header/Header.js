import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

export default function Header () {
	const links = [
		{
			link : 'How it works',
			to   : '/how_it_works'
		},
		{
			link : 'Requesters',
			to   : '/requests'
		},
		{
			link : 'Workers',
			to   : '/workers'
		},
		{
			link : 'Pricing',
			to   : '/pricing'
		},
		{
			link : 'About',
			to   : '/about'
		}
	];

	const NavLink = ({ links }) => {
		const navLinks = links.map(({ link, to }, index) => (
			<Link className="nav-link" to={to} key={index}>
				{link}
			</Link>
		));

		return <nav>{navLinks}</nav>;
	};

	return (
		<header>
			<div className="logo">iCrowd</div>
			<NavLink links={links} />
			<Link className="button" to="/login">
				Sign In
			</Link>
		</header>
	);
}
