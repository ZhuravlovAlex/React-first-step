import React from 'react';
import styles from './SingleLine.module.css';



class SingleLine extends React.Component {
	
	constructor(props) {
		super(props);
		this.props = props;
	}

  render() {
    return (
			<div className={styles.single}>
				<label htmlFor="name_form">Name</label>
				<input 
					type='text'  
					required 
					id="name_form" 
					placeholder='Enter Name'
					value = {this.props.firstName}
					onChange={this.props.handleFNameChange}
				/>

				<label htmlFor="surname_form">Surname</label>
				<input 
					id="surname_form" 
					required
					placeholder='Enter Surname'
					value = {this.props.surName}
					onChange={this.props.handleSNameChange}
				/>

				<label htmlFor="birthday_form">Birthday date</label>
				<input
					type='date'
					required
					id="birthday_form" 
					value={this.props.birthDate}
					placeholder='Enter Birthday date'
					onChange={this.props.handleBirthDateChange}
				/>

				<label htmlFor="phone_form">Phone #</label>
				<input 
					type='tel'
					name='tel'
					required 
					id="phone_form" 
					placeholder='Enter Phone #'
					value={this.props.phone}
					pattern ="[0-9]{1}-[0-9]{4}-[0-9]{2}-[0-9]{2}"	
					onChange={this.props.handlePhoneChange}
				/>

				<label htmlFor="web-site_form">Web Site</label>
				<input 
					type='url' 
					required  
					id="url" 
					placeholder='Enter Web Site'
					pattern="https://.*"
					size='30'
					value={this.props.website}
					onChange={this.props.handleWebsiteChange}
				/>
			</div>
    );
  }
	
}


export default SingleLine;