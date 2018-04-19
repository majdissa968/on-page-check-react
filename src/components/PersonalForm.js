import React, { Fragment } from 'react';

class PersonalForm extends React.Component {
	FirstnameRef = React.createRef();
	lastNmaeRef = React.createRef();
	CompanyRef = React.createRef();
	emailRef = React.createRef();

	createUser = event => {
		// 1.  stop the form from submitting
		event.preventDefault();
		const userInfo = {
			firstName: this.FirstnameRef.current.value,
			lastNmae: this.lastNmaeRef.current.value,
			company: this.CompanyRef.current.value,
			email: this.emailRef.current.value
		};
		console.log(userInfo);
		// this.props.addUser(userInfo);
		// refresh the form
		event.currentTarget.reset();
	};

	render() {
		return (
			<Fragment>
				<form onSubmit={this.createUser}>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							placeholder="First Name"
							ref={this.FirstnameRef}
						/>
					</div>

					<div className="form-group">
						<input
							type="text"
							className="form-control"
							placeholder="Last Name"
							ref={this.lastNmaeRef}
						/>
					</div>

					<div className="form-group">
						<input
							type="text"
							className="form-control"
							placeholder="Company"
							ref={this.CompanyRef}
						/>
					</div>

					<div className="form-group">
						<input
							type="text"
							className="form-control"
							placeholder="Email"
							ref={this.emailRef}
						/>
					</div>
					<button type="submit" className="btn-save btn btn-success">
						<i className="fa fa-save" /> Next Step
					</button>
				</form>
			</Fragment>
		);
	}
}

export default PersonalForm;
