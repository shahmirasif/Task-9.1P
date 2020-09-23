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
