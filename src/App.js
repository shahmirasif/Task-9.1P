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
