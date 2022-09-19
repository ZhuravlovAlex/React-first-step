import React from 'react';
import styles from './Tables.module.css';

class Tables extends React.Component {

	constructor(props) {
		super(props);
		this.state = props.state;
	}

	render() {
		return (
			<div className={styles.table}>
				<h2>
					{this.state.firstName} {this.state.surName}
				</h2>
				<table border={1}>
					<tbody>
						<tr><td>Name</td><td>{this.state.firstName}</td></tr>
						<tr><td>SurName</td><td>{this.state.surName}</td></tr>
						<tr><td>Birthday date</td><td>{this.state.birthDate}</td></tr>
						<tr><td>Phone #</td><td>{this.state.phone}</td></tr>
						<tr><td>Web Site</td><td>{this.state.website}</td></tr>
						<tr><td>About yourself</td><td>{this.state.about}</td></tr>
						<tr><td>Technology stack</td><td>{this.state.stack}</td></tr>
					</tbody>
				</table>
			</div>
		)
	}
}

export default Tables;