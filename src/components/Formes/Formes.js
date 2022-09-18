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

		this.handleWebsiteChange = this.handleWebsiteChange.bind(this);
		this.handleFNameChange = this.handleFNameChange.bind(this);
		this.handleSNameChange = this.handleSNameChange.bind(this);
		this.handlePhoneChange = this.handlePhoneChange.bind(this);
		this.handleBirthDateChange = this.handleBirthDateChange.bind(this);
		this.handleAboutChange = this.handleAboutChange.bind(this);
		this.handleStackChange = this.handleStackChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleWebsiteChange(event) {
		this.setState({website: event.target.value})
	}

	handleFNameChange (event) {
		this.setState({firstName: event.target.value});
		console.log(this.state)
	};
  
	handleSNameChange (event) {
		this.setState({surName: event.target.value});
	}

	handlePhoneChange (event) {
		this.setState({phone: event.target.value});
	}

	handleBirthDateChange (event) {
		this.setState({birthDate: event.target.value});
	}

	handleAboutChange (event) {
		this.setState({about: event.target.value});
	}

	handleStackChange (event) {
		this.setState({stack: event.target.value});
	}

	handleSubmit() {
		console.log('form is submitted');

		//kakieto proverki

		this.setState({isSubmitted: true});
	}

  render() {
    return (
			!this.state.isSubmitted ?
			<div className={styles.main}>
				<form onSubmit={this.handleSubmit}>
					<h1 className='title'>Questionnaire</h1>
					<SingleLine
						handleFNameChange={this.handleFNameChange}
					></SingleLine>
					<MultiLine></MultiLine>
					<Btns></Btns>
				</form>
			</div> : <Tables></Tables>
    );
  }
}


export default Formes;
