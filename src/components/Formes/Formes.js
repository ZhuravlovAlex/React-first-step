import React from 'react';
import styles from './Formes.module.css';
import SingleLine from '../SingleLine/SingleLine';
import MultiLine from '../MultiLine/MultiLine';
import Btns from '../Btns/Btns';


class Formes extends React.Component {
  render() {
    return (
			<div className='main'>
				<h1 className='title'>Questionnaire</h1>
				<SingleLine></SingleLine>
				<MultiLine></MultiLine>
				<Btns></Btns>
			</div>
    );
  }
}

export default Formes;
