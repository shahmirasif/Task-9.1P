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
