import React from 'react';
import styles from './Formes.module.css';
import SingleLine from '../SingleLine/SingleLine';
import MultiLine from '../MultiLine/MultiLine';
import Btns from '../Btns/Btns';
import Tables from '../Tables/Tables';

class Formes extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			website: '',
			firstName: '',
			surName: '',
			phone: '',
			birthDate: '',
			about: '',
			stack: '',
			isSubmitted: false
		}

		this.updateState = this.updateState.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	updateState (key) {
		return (event) => {
			this.setState({[key]: event.target.value})
		}
	}

	// handleWebsiteChange(event) {
	// 	this.setState({website: event.target.value})
	// }

	// handleFNameChange (event) {
	// 	this.setState({firstName: event.target.value});
	// 	console.log(this.state)
	// };
  
	// handleSNameChange (event) {
	// 	this.setState({surName: event.target.value});
	// }

	// handlePhoneChange (event) {
	// 	this.setState({phone: event.target.value});
	// }

	// handleBirthDateChange (event) {
	// 	this.setState({birthDate: event.target.value});
	// }

	// handleAboutChange (event) {
	// 	this.setState({about: event.target.value});
	// }

	// handleStackChange (event) {
	// 	this.setState({stack: event.target.value});
	// }

	handleSubmit() {
		console.log('form is submitted');

		this.setState({isSubmitted: true});
	}

  render() {
    return (
			!this.state.isSubmitted ?
			<div className={styles.main}>
				<form onSubmit={this.handleSubmit}>
					<h1 className='title'>Questionnaire</h1>
					<SingleLine
						handleFNameChange={this.updateState('firstName')}
						handleSNameChange={this.updateState('surName')}
						handlePhoneChange={this.updateState('phone')}
						handleBirthDateChange={this.updateState('birthDate')}
						handleWebsiteChange={this.updateState('website')}
					></SingleLine>
					<MultiLine
						handleAboutChange={this.updateState('about')}
						handleStackChange={this.updateState('stack')}
					></MultiLine>
					<Btns></Btns>
				</form>
			</div> : <Tables
									state={this.state}
								></Tables>
    );
  }
}


export default Formes;
