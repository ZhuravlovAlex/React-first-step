import React, { useState } from 'react';
import styles from './SingleLine.module.css';



/*class SingleLine extends React.Component {*/
function SingleLine (_props) {

	const [props] = useState(_props);
	
	// constructor(props) {
	// 	super(props);
	// 	this.props = props;
	// }

  /*render() {*/
    return (
			<div className={styles.single}>
				<label htmlFor="name_form">Name</label>
				<input 
					type='text'  
					required 
					id="name_form" 
					placeholder='Enter Name'
					value = {props.firstName}
					onChange={props.handleFNameChange}
				/>

				<label htmlFor="surname_form">Surname</label>
				<input 
					id="surname_form" 
					required
					placeholder='Enter Surname'
					value = {props.surName}
					onChange={props.handleSNameChange}
				/>

				<label htmlFor="birthday_form">Birthday date</label>
				<input
					type='date'
					required
					id="birthday_form" 
					value={props.birthDate}
					placeholder='Enter Birthday date'
					onChange={props.handleBirthDateChange}
				/>

				<label htmlFor="phone_form">Phone #</label>
				<input 
					type='tel'
					name='tel'
					required 
					id="phone_form" 
					placeholder='Enter Phone #'
					value={props.phone}
					pattern ="[0-9]{1}-[0-9]{4}-[0-9]{2}-[0-9]{2}"	
					onChange={props.handlePhoneChange}
				/>

				<label htmlFor="web-site_form">Web Site</label>
				<input 
					type='url' 
					required  
					id="url" 
					placeholder='Enter Web Site'
					pattern="https://.*"
					size='30'
					value={props.website}
					onChange={props.handleWebsiteChange}
				/>
			</div>
    );
  }
	
/*}*/


export default SingleLine;