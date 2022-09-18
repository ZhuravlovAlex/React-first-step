import React from 'react';
import styles from './Tables.module.css';

class Tables extends React.Component {

	render() {
		return (
			<div className={styles.table}>
				<h2>{this.state.firstName}</h2><h2>{this.state.surName}</h2>
				<table border={1}>
					<tr><td>Name</td><td></td></tr>
					<tr><td>SurName</td><td></td></tr>
					<tr><td>Birthday date</td><td></td></tr>
					<tr><td>Phone #</td><td></td></tr>
					<tr><td>Web Site</td><td></td></tr>
					<tr><td>About yourself</td><td>{this.props.about}</td></tr>
					<tr><td>Technology stack</td><td>{this.props.stack}</td></tr>
				</table>

			</div>
		)
	}
}

export default Tables;