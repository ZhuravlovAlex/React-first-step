import React, { useState } from "react";
import styles from './Counter.module.css'

// const textarea = props.about
// 	const count = styles.count

function Counter(_props) {
  
	const [props] = useState(_props)


	// const text = textarea.value
	// const textLength = textarea.value.textLength
	// count.innerText = `${textLength}`

	return (
		<p className={styles.countText} >Всего символов: 
		<span className={styles.count}>{props.length}</span> из 600
		</p>
		
	)
}

export default Counter