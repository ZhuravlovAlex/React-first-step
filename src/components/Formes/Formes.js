import React, { useState } from 'react';
import styles from './Formes.module.css';
import SingleLine from '../SingleLine/SingleLine';
import MultiLine from '../MultiLine/MultiLine';
import Btns from '../Btns/Btns';
import Tables from '../Tables/Tables';


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

			
	const getStateUpdateFunction = (key) => {
		return (event) => {
			state[key] = event.target.value;

				console.log(state);
			stateUpdate(state)
		}
	}


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
