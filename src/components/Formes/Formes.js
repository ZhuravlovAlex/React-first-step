import React, { useState } from 'react';
import styles from './Formes.module.css';
import SingleLine from '../SingleLine/SingleLine';
import MultiLine from '../MultiLine/MultiLine';
import Btns from '../Btns/Btns';
import Tables from '../Tables/Tables';

/*class Formes extends React.Component { */
function Formes () {

	const [state, stateUpdate] = useState({
			website: '',
			firstName: '',
			surName: '',
			phone: '',
			birthDate: '',
			about: '',
			stack: '',
			isSubmitted: false
		})

		// getStateUpdateFunction = getStateUpdateFunction.bind(this);
		// this.handleSubmit = this.handleSubmit.bind(this);
	

	const getStateUpdateFunction = (key) => {
		return (event) => {
			state[key] = event.target.value;

				console.log(state);
			stateUpdate(state)
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

	const handleSubmit = () => {
		state.isSubmitted = true;
		console.log(state);
		stateUpdate(state);
	}

		
    return (
			<div>
				{state.isSubmitted ? <Tables state={state}/> :
				<div className={styles.main}>
					<h1 className='title'>Questionnaire</h1>
					<SingleLine
						handleFNameChange={getStateUpdateFunction('firstName')}
						handleSNameChange={getStateUpdateFunction('surName')}
						handlePhoneChange={getStateUpdateFunction('phone')}
						handleBirthDateChange={getStateUpdateFunction('birthDate')}
						handleWebsiteChange={getStateUpdateFunction('website')}/>
					<MultiLine
						about={state.about}
						handleAboutChange={getStateUpdateFunction('about')}
						handleStackChange={getStateUpdateFunction('stack')}/>
					<Btns onClick={handleSubmit}></Btns>
				</div>
				}
			</div>
		);
}


export default Formes;
