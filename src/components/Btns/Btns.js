import React from 'react';
import styles from './Btns.module.css';

class Btns extends React.Component {
  render() {
    return (
			<div className={styles.btns}>
				<button>Cancel</button>
				<button>Save</button>
			</div>
      
    );
  }
}

export default Btns;