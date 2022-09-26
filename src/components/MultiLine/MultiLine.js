import React, { useState } from 'react';
import styles from './MultiLine.module.css';


function MultiLine (_props) {

	const [props, stateUpdate] = useState(_props)


	return (
		<div className={styles.multi}>
			<label htmlFor="about_form" className={styles.label}>About yourself</label>
			<textarea 
				className={styles.textarea} 
				rows={7}
				maxLength='600' 
				id="about_form" 
				required
				placeholder='Enter Info About Yourself'
				onChange={(event) => {
					const textarea = document.getElementById('about_form');
					const counter = document.getElementById('about_form_counter');
					const text = textarea.value;
					counter.innerText = text?.length || 0;
					props.handleAboutChange(event);
				}}
			></textarea>
			<p className={styles.countText} >Всего символов: &nbsp; 
			<span id='about_form_counter' className={styles.count}>0</span> из 600
			</p>

			<label htmlFor="stack_form" className={styles.label}>Technology stack</label>
			<textarea 
			className={styles.textarea} 
			rows={7} 
			maxLength='600'
			id="stack_form" 
			required
			placeholder='Enter Your Technology Stack'
			value = {props.stack}
			onChange={(event) => {
				const textarea = document.getElementById('stack_form');
				const counter = document.getElementById('stack_form_counter');
				const text = textarea.value;
				counter.innerText = text?.length || 0;
				props.handleStackChange(event);
			}} 
			></textarea>
			<p className={styles.countText} >Всего символов: &nbsp; 
			<span id='stack_form_counter' className={styles.count}>0</span> из 600
			</p>
		</div>
	);
}


export default MultiLine;