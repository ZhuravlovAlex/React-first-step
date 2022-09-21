import React, { useState } from 'react';
import styles from './Btns.module.css';

/*class Btns extends React.Component {*/
function Btns (_props) {

	const [props] = useState(_props)

  /*render() { */
    return (
			<div className={styles.btns}>
				<input type="button" value="Cancel" />
				<input type="submit" onClick={_props.onClick} value="Save" />
			</div>
      
    );
  }
/*} */

export default Btns;