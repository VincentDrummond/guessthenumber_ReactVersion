// the engine
//set up the App logic, methods etc

import { Component } from 'react';
import View from "./View.js";
// bring in View from another file
import { randomNumber } from './components/maths.js';
import { randomInteger } from './components/maths.js';



class App extends Component {
//use class if there is a need to handle state
	static TOO_LOW = Symbol('too low');
	static HIGH = Symbol('too high');
	static EXACT_MATCH = Symbol('exact match');
	static OUT_OF_BOUNDS = Symbol('out of bounds');
	static GAME_OVER = Symbol('game over');

	state = {
		query: " ", settings:{}
	};
// the query in the input

	render() {
		return (
				<View
					onClick={() => this.numberGuess()}
					onChange={event => this.onChange(event)}
					/>
		)
// return the View from View.js
// pass in the event listeners/handles (methods attached the to the class)
	}

	// getHelp() {
	// 	console.log("Help Me");
	// }

	numberGuess() {
		alert(this.state.query);
// grabs the state containing the query in line 36
	}



	onChange(event) {
		let input = event.target;
		let value = input.value;

		this.setState({
			query: value,
		})

		
// to get the value of the input query, insert it into state
	}
}



export default App;
