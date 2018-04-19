import React, { Fragment } from 'react';

class WebsiteForm extends React.Component {
	urlRef = React.createRef();
	keywordsRef = React.createRef();

	handelSubmit = event => {
		// 1.  stop the form from submitting
		event.preventDefault();
		const webInfo = {
			url: this.urlRef.current.value,
			keyword: this.keywordsRef.current.value
		};
		console.log(webInfo);
		// this.props.addToResult(webInfo);
		// refresh the form
		event.currentTarget.reset();
	};

	render() {
		return (
			<Fragment>
				<div className="app container">
					<div className="row">
						<div className="col-lg-4">
							<form onSubmit={this.handelSubmit}>
								<div className="form-group">
									<input
										type="text"
										className="form-control"
										placeholder="URL"
										ref={this.urlRef}
									/>
								</div>

								<div className="form-group">
									<input
										type="text"
										className="form-control"
										placeholder="Keywords, comma seperated"
										ref={this.keywordsRef}
									/>
								</div>
								<button
									type="submit"
									className="btn-save btn btn-success"
									// onClick={() => this.props.addToResult(this.props.index)}
								>
									<i className="fa fa-save" /> Next Step
								</button>
							</form>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default WebsiteForm;
