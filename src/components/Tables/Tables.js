import React, { useState } from 'react';
import styles from './Tables.module.css';


function Tables (state) {

	const [props] = useState(state)
	
	
		return (
			<div className={styles.table}>
				<h2>
					{props.state.firstName} {props.state.surName}
				</h2>
				<table border={1}>
					<tbody>
						<tr><td>Name</td><td>{props.state.firstName}</td></tr>
						<tr><td>SurName</td><td>{props.state.surName}</td></tr>
						<tr><td>Birthday date</td><td>{props.state.birthDate}</td></tr>
						<tr><td>Phone #</td><td>{props.state.phone}</td></tr>
						<tr><td>Web Site</td><td>{props.state.website}</td></tr>
						<tr><td>About yourself</td><td>{props.state.about}</td></tr>
						<tr><td>Technology stack</td><td>{props.state.stack}</td></tr>
					</tbody>
				</table>
			</div>
		)
	}


export default Tables;