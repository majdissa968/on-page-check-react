import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserData from './steps/UserData';
import Website from './steps/Website';
import Results from './steps/Results';
import Nav from './Nav';

class App extends React.Component {
	state = {
		userData: {},
		website: {}
	};

	updateUserData = user => {
		this.setState(state => {
			state.userData = user;
			return state;
		});
	};

	updateWebSiteData = web => {
		this.setState(state => {
			state.website = web;
			return state;
		});
	};

	render() {
		return (
			<Router>
				<div className="app container">
					<h1>Mini OnPage Check</h1>
					<Nav />
					<Route
						exact
						path="/"
						render={() => <UserData updateUserData={this.updateUserData} />}
					/>
					<Route
						path="/2"
						render={() => (
							<Website updateWebSiteData={this.updateWebSiteData} />
						)}
					/>
					<Route
						path="/3"
						render={() => <Results url={this.state.website.url} />}
					/>
				</div>
			</Router>
		);
	}
}

export default App;
