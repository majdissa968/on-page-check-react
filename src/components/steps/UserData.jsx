import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

class UserData extends React.Component {
	fields = {
		FirstNameRef: React.createRef(),
		lastNameRef: React.createRef(),
		CompanyRef: React.createRef(),
		emailRef: React.createRef()
	};

	createUser = event => {
		const userInfo = {
			firstName: this.fields.FirstNameRef.current.value,
			lastName: this.fields.lastNameRef.current.value,
			company: this.fields.CompanyRef.current.value,
			email: this.fields.emailRef.current.value
		};
		this.props.updateUserData(userInfo);
	};

	render() {
		return (
			<Fragment>
				<h3>Personal Data</h3>

				<div className="form-group">
					<input
						className="form-control"
						type="text"
						placeholder="First Name"
						ref={this.fields.FirstNameRef}
						onChange={this.createUser}
					/>
				</div>
				<div className="form-group">
					<input
						className="form-control"
						type="text"
						placeholder="Last Name"
						ref={this.fields.lastNameRef}
						onChange={this.createUser}
					/>
				</div>
				<div className="form-group">
					<input
						className="form-control"
						type="text"
						placeholder="Company Name"
						ref={this.fields.CompanyRef}
						onChange={this.createUser}
					/>
				</div>
				<div className="form-group">
					<input
						className="form-control"
						type="text"
						placeholder="Email"
						ref={this.fields.emailRef}
						onChange={this.createUser}
					/>
				</div>

				<Link to="/2" className="btn-next btn btn-success">
					Next Step
				</Link>
			</Fragment>
		);
	}
}

export default UserData;
