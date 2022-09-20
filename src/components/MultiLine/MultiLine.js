import React, { useState } from 'react';
import styles from './MultiLine.module.css';

/*class MultiLine extends React.Component {*/
function MultiLine (_props) {

	const [props] = useState(_props)


	// constructor(props) {
	// 	super(props);
	// 	this.props = props;
	// }


  /*render() { */
    return (
			<div className={styles.multi}>
				<label htmlFor="about_form" className={styles.label}>About yourself</label>
				<input 
					className={styles.textarea} 
					maxLength='600' 
					id="about_form" 
					required
					placeholder='Enter Info About Yourself'
					value = {props.about}
					onChange = {props.handleAboutChange}
				/>

				<label htmlFor="stack_form" className={styles.label}>Technology stack</label>
				<textarea 
				className={styles.textarea} 
				rows={7} 
				id="stack_form" 
				required
				placeholder='Enter Your Technology Stack'
				value = {props.stack}
				onChange = {props.handleStackChange}
				></textarea>
			</div>
    );
  }
/*}*/

export default MultiLine;