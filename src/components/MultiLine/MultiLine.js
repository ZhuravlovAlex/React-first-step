import React from 'react';
import styles from './MultiLine.module.css';

class MultiLine extends React.Component {
  render() {
    return (
			<div className={styles.multi}>
				<label htmlFor="about_form">About yourself</label>
				<textarea rows={7} id="about_form" className={styles.textarea} placeholder='Enter Info About Yourself'></textarea>

				<label htmlFor="stack_form">Technology stack</label>
				<textarea rows={7} id="stack_form" className={styles.textarea} placeholder='Enter Your Technology Stack'></textarea>
			</div>
    );
  }
}

export default MultiLine;