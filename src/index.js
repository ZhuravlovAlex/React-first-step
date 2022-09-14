import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

console.log('Hello')

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

class SingleLine extends React.Component {
  render() {
    return (
			<div className='single'>
				<label for="name_form">Name</label>
				<textarea rows={1} id="name_form" placeholder='Enter Name'></textarea>

				<label for="surname_form">Surname</label>
				<textarea rows={1} id="surname_form" placeholder='Enter Surname'></textarea>

				<label for="birthday_form">Birthday date</label>
				<textarea rows={1} id="birthday_form" placeholder='Enter Birthday date'></textarea>

				<label for="phone_form">Phone #</label>
				<textarea rows={1} id="phone_form" placeholder='Enter Phone #'></textarea>

				<label for="web-site_form">Web Site</label>
				<textarea rows={1} id="web-site_form" placeholder='Enter Web Site'></textarea>
			</div>
    );
  }
}
class MultiLine extends React.Component {
  render() {
    return (
			<div className='multi'>
				<label for="about_form">About yourself</label>
				<textarea rows={7} id="about_form" placeholder='Enter Info About Yourself'></textarea>

				<label for="stack_form">Technology stack</label>
				<textarea rows={7} id="stack_form" placeholder='Enter Your Technology Stack'></textarea>
			</div>
    );
  }
}

class Btns extends React.Component {
  render() {
    return (
			<div className='btns'>
				<button>Cancel</button>
				<button>Save</button>
			</div>
      
    );
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
const element = <Formes></Formes>;
root.render(element);


// setTimeout(() => {
// const table = <h2>MMMnn</h2>;
// root.render(table);
// }, 2000)
