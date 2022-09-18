import React from 'react';
import styles from './SingleLine.module.css';



class SingleLine extends React.Component {
  render() {
    return (
			<div className={styles.single}>
				<label htmlFor="name_form">Name</label>
				<input type='text'  required rows={1} id="name_form" placeholder='Enter Name'/>

				<label htmlFor="surname_form">Surname</label>
				<textarea rows={1} id="surname_form" placeholder='Enter Surname'></textarea>

				<label htmlFor="birthday_form">Birthday date</label>
				<textarea rows={1} id="birthday_form" placeholder='Enter Birthday date'></textarea>

				<label htmlFor="phone_form">Phone #</label>
				<textarea rows={1} id="phone_form" placeholder='Enter Phone #'></textarea>

				<label htmlFor="web-site_form">Web Site</label>
				<textarea rows={1} id="web-site_form" placeholder='Enter Web Site'></textarea>
			</div>
    );
  }
}

export default SingleLine;