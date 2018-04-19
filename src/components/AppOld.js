import React from 'react';
import uuid from 'uuid/v4';
import PersonalForm from './PersonalForm';
// import sampleData from '../data-personal.js';

class App extends React.Component {
	state = {
		currentStep: {}
	};

	addToResult = uuid => {
		// 1. take a copy of state
		const result = { ...this.state.currentStep };
		// 2. Either add to the order, or update the number in our order
		result[uuid] = result[uuid] + 1 || 1;
		// 3. call setState to update our state Object
		this.setState({ result });
	};

	render() {
		return (
			<div className="app container">
				<h1>Personal Data</h1>
				<div className="row">
					<div className="col-lg-4">
						<PersonalForm
							uuid={uuid}
							index={uuid}
							addToResult={this.state.addToResult}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;

// updateCustomerData = data => {
//   this.setState(state => {
//     state.customer = data;
//     return state;
//   });
// };

// addItem = item => {
//   item.uuid = uuid();

//   this.setState(state => {
//     state.items[item.uuid] = item;
//     state.total += item.price * item.amount;
//     return state;
//   });
// };

// saveBill = () => {
//   console.log('Save new bill:');
//   console.log(this.state);
// };
