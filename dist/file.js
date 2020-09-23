import React from 'react';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './Landing';
import Footer from './Components/Footer/Footer';

function App () {
	return (
		<Router>
			<div className="App">
				<Header />
				<Route exact path="/" component={Landing} />
				<Footer />
			</div>
		</Router>
	);
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

html,
body,
h1,
h2,
h3,
h4,
h5,
h6 {
	margin: 0;
	padding: 0;
}

// Landing Page
.hero {
	background: url('./images/background/hero-bg.jpeg') no-repeat;
	background-size: 100% 170%;
	background-position: 0 30%;
	height: 450px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	flex-direction: column;

	h1 {
		font-weight: bolder;
		font: 4em roboto;
		word-spacing: 0.2em;
		letter-spacing: 2px;
		text-transform: uppercase;
	}

	h2 {
		font: 1.5em roboto;
		letter-spacing: 1px;
	}
}

.requesters {
	width: 60%;
	margin: 0 auto;
	padding-bottom: 100px;

	h2 {
		text-align: center;
		margin: 1.5em 0 1em 0;
		font: 2.5em Roboto;
		font-weight: bold;
	}
}

import React from 'react';
import RequestCard from './Components/Request Card/RequestCard';

export default function Landing () {
	return (
		<main id="landing">
			<Hero />
			<Requesters />
		</main>
	);
}

const Hero = () => {
	return (
		<section className="hero">
			<h1>Make a request</h1>
			<h2>Join the crowd!</h2>
		</section>
	);
};

const Requesters = () => {
	const cards = [
		{
			img    : 'https://picsum.photos/id/1005/5760/3840',
			imgAlt : 'Guy on beach',
			name   : 'John Doe',
			desc   : 'Donec blandit malesuada elit non posuere. Ut ac nisi velit. Integer suscipit pretium est, nec luctus lectus tempus non. '
		},
		{
			img    : 'https://picsum.photos/id/1011/5472/3648',
			imgAlt : 'Girl on boat',
			name   : 'Sarah Potter',
			desc   : 'Maecenas vehicula massa at commodo condimentum. Praesent ante quam, consectetur et arcu non, euismod imperdiet ante.'
		},
		{
			img    : 'https://picsum.photos/id/203/4032/3024',
			imgAlt : 'Guy strecthing on sun rise',
			name   : 'Dwayne Statham',
			desc   : 'Quisque quis maximus est. Suspendisse risus mi, imperdiet sed placerat eget, fringilla ac lectus. Cras porta nisi a lorem.'
		},
		{
			img    : 'https://picsum.photos/id/325/4928/3264',
			imgAlt : 'Girl in white dress in forest',
			name   : 'Samantha Swift',
			desc   : 'ellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris dictum, ligula ut.'
		},
		{
			img    : 'https://picsum.photos/id/338/2000/1333',
			imgAlt : 'Guy in hoodie on beach',
			name   : 'Patrick Putin',
			desc   : 'Nunc placerat pellentesque nibh. Donec lacinia nibh nec vehicula semper. Suspendisse molestie neque sit amet ultricies.'
		},
		{
			img    : 'https://picsum.photos/id/349/3264/2176',
			imgAlt : 'Guy resting while looking over a city',
			name   : 'George Lincoln',
			desc   : 'Donec non ante ultrices, vestibulum ante vitae, sollicitudin dolor. Quisque libero erat, aliquet et metus id, rhoncus.'
		}
	];

	return (
		<section className="requesters">
			<h2>Featured Requesters</h2>
			<RequestCard cards={cards} />
		</section>
	);
};

import React from 'react';
import './footer.scss';
import Facebook from '../../images/icons/facebook.svg';
import Twitter from '../../images/icons/twitter.svg';

export default function Footer () {
	return (
		<footer>
			<div className="footer-top">
				<div className="information">
					<div className="logo">iCrowd</div>
					<div className="footer-about">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, qui. Exercitationem vel natus nostrum beatae fuga voluptatum
					</div>
				</div>
				<div className="subscriptions">
					<h3>Subscribe to us!</h3>
					<p>Receive updates directly to your email whenever we have news!</p>
					<div className="subscribe">
						<form action="">
							<input type="text" placeholder="Enter your email" />
							<button type="submit">Subscribe</button>
						</form>
					</div>
					<div className="social-icons">
						<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icon">
							<img src={Facebook} alt="Facebook Icon" />
						</a>
						<a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="icon">
							<img src={Twitter} alt="Twitter Icon" />
						</a>
					</div>
				</div>
			</div>
			<div className="footer-bottom">&copy; iCrowd 2020. All rights reserverd.</div>
		</footer>
	);
}

footer {
	background-color: #e1e1e1;
	padding: 0 150px;
	font-family: Roboto;

	.footer-top {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		border-bottom: 1px solid lightgrey;
		padding-bottom: 80px;

		.information {
			margin-top: 80px;
			width: 400px;

			.logo {
				font-weight: bold;
				font-size: 2em;
			}

			.footer-about {
				padding: 20px 0;
				font-size: 0.9rem;
				line-height: 1.5em;
			}
		}

		.subscriptions {
			margin-top: 80px;
			width: 350px;

			h3 {
				font-size: 1.5em;
				font-weight: 500;
			}

			p {
				font-size: 0.9rem;
				padding: 0;
			}

			input[type="text"] {
				outline: none;
				border: none;
				background-color: white;
				padding: 10px 10px;
				width: 250px;
				box-sizing: border-box;
			}

			button {
				border: none;
				outline: none;
				background-color: black;
				color: white;
				padding: 10px 10px;
				cursor: pointer;
			}

			.social-icons {
				margin-top: 20px;
				display: flex;

				.icon {
					width: 25px;
					height: 25px;
					padding: 0 5px;
					cursor: pointer;

					img {
						max-width: 100%;
						height: auto;
					}
				}
			}
		}
	}

	.footer-bottom {
		padding: 20px 0;
	}
}

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

header {
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	padding: 0 5%;
	box-sizing: border-box;
	position: sticky;
	position: -webkit-sticky;
	background-color: white;
	top: 0;
	box-shadow: 0 12.5px 10px rgba(0, 0, 0, 0.035), 0 100px 80px rgba(0, 0, 0, 0.07);

	.logo {
		font-weight: bold;
		font-family: Roboto;
		font-size: 2em;
		padding: 20px 0;
	}

	nav {
		display: flex;
		flex-wrap: nowrap;

		.nav-link {
			padding: 0 20px;
			text-decoration: none;
			color: black;
			transition: color 0.5s ease;
			font-weight: 500;
			font-family: Roboto;
			font-size: 1.2em;

			&:hover {
				color: rgba(0, 0, 0, 0.5);
			}
		}
	}

	.button {
		color: black;
		border: 2px solid black;
		padding: 0.9em 5em;
		text-decoration: none;
		font-weight: bold;
		font: 0.8em sans-serif;
		text-transform: uppercase;
		transition-property: color, background-color;
		transition-duration: 0.5s;
		transition-timing-function: ease;

		&:hover {
			background-color: rgba(0, 0, 0, 0.8);
			color: white;
		}
	}
}

.request-cards-container {
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 50px;

	.request-card {
		padding: 20px;
		font-family: Roboto;
		box-shadow: 0 0.5px 3.6px rgba(0, 0, 0, 0.024), 0 1.5px 10px rgba(0, 0, 0, 0.035), 0 3.6px 24.1px rgba(0, 0, 0, 0.046),
			0 12px 80px rgba(0, 0, 0, 0.07);

		img {
			max-width: 100%;
			width: 100%;
			height: 200px;
			object-fit: cover;
		}

		h3 {
			margin-top: 1rem;
			font-weight: bold;
		}

		p {
			font-weight: normal;
			font-size: 0.8rem;
		}
	}
}

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
