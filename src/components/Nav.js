import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
	render() {
		return (
			<ul className="nav nav-tabs">
				<li className="nav-item">
					<NavLink exact to="/" className="nav-link" activeClassName="active">
						Step 1
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to="/2" className="nav-link" activeClassName="active">
						Step 2
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to="/3" className="nav-link" activeClassName="active">
						Step 3
					</NavLink>
				</li>
			</ul>
		);
	}
}

export default Nav;
