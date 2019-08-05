import React, { Component } from 'react';
import InputBox from '../components/InputBox';
import OutputBox from '../components/OutputBox';
import 'tachyons';

class Echo extends Component {

	constructor() {
		super();
		this.state = {
			text: ''
		}
	}

	onInputBoxChange = ( event ) => {
		this.setState( { text: event.target.value } );
	}

	render() {
		return(
			<div className="Echo tc pa3">
				<h1>React Text Echo</h1>
				<InputBox inputBoxChange={ this.onInputBoxChange } />
				<OutputBox text={ this.state.text } />
			</div>
		);
	}
}

export default Echo;
