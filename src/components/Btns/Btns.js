import React from 'react';
import styles from './Btns.module.css';

class Btns extends React.Component {
  render() {
    return (
			<div className={styles.btns}>
				<input type="button"  onClick = {this.handleClick} value="Cancel" />
				<input type="submit"  onClick = {this.handleClick} value="Save" />
			</div>
      
    );
  }
}

export default Btns;