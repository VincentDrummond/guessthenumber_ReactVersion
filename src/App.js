// the engine
//set up the App logic, methods etc

import { Component } from 'react';
import View from "./View.js";
// bring in View from another file
import { randomInteger } from './components/maths.js';



class App extends Component {
//use class if there is a need to handle state
	static DIFFICULTIES = {
// static doesn't change per instance
// DIFFICULTIES will always be what it is here
		easy: {
			tries: 10,
			upper: 25
		},
		medium: {
			tries: 7,
			upper: 50,
		},
		hard: {
			tries: 5,
			upper: 100,
		}
	}

	state = {
		difficulty: null,
		lower: null,
		upper: null,
		maxTries: null,
		target: null,
		attempts: [],
		guess: null,
	};

	get attemptsRemaining() {
		return this.state.maxTries - this.state.attempts.length;
	}

	render() {
		return (
// return everything inside View from View.js

// this is sending all these values to the View
// functional component in View.js as props, and then destructuring them in line 12
				<View
					guess={this.state.guess}
					difficulty={this.state.difficulty}
					
					lower={this.state.lower}
					upper={this.state.upper}
					attempts={this.state.attempts}
					attemptsLeft={this.attemptsRemaining}

					onInitialise={({ target: { options, selectedIndex } }) => {
// destructed e here, then destructed target as is an object
// pulled out the options & selectedIndex attributes from the target
						this.onInitialise(options[selectedIndex].value);
// this is then pushed into the intialise method
					}}

// selectedIndex gives you the index of the selected value
// ie. 0, 1 or 2 as are 3 options(easy, medium, hard)

				/*	ANOTHER WAY OF DOING THE ABOVE
					initialise={e => {
						let selectDropDown = e.target;
							- gets the selectbox HTML element
						
						let index = selectDropDown.selectedIndex;
							- gets the index of selectDropDown(the HTML element)

						let difficulty = selectDropDown.options[index].value;
							- go to thw options array, pass in the index
								and get the value of the index

						alert(difficulty);
							- alert the value of the index of the selected element
				*/

					onGuessButton={() => {
						this.guess(parseInt(this.state.guess));
					}}

					onResetButton={() => {
						this.reset();
					}}

					onHelpButton={e => {
						this.help();
					}}

					onInput={({ target: { value: guess } }) => {
// destructure to get value from target (the guess input box), and rename it guess
						this.setState({ guess });
// sets the set to take the guess value
					}}

				/>
		);
	}

	onInitialise(difficulty = "easy") {
			const {
				lower = 1,
				upper = 100,
				tries: maxTries = 10,
			} = App.DIFFICULTIES[difficulty];

		this.setState({
// sets the state on initialise from null to what is defined in the difficulties parameters
			difficulty,
			lower,
			upper,
			maxTries,
			target: randomInteger(lower, upper)

		})
	}

	guess(number = 1) {
		this.setState({
			guess: ""
		});

		if (this.attemptsRemaining === 0) {
			alert("That's game over!");

			this.setState({
				difficulty: null,
			})
		}

		const {
			target,
			upper,
			lower,
			attempts
		} = this.state;
// destructures this.state to avoid typing it multiple below

		if (number === target) {
			alert("You win");

			this.setState({
				difficulty: null,
			})
		}

		if (number < lower || number > upper) {
			alert("Choose a number between the bounds");
		} else {
			this.setState({
				attempts: [...attempts, number]
			})	
		if (number < target) {
			alert("Your guess is too low");
		}
	}

		if (number > target) {
			alert("Your guess is too high")
		}

		if (this.state.attempts.includes(number)) {
			return alert("You've already guessed that number'")
		}
	}

	help() {
		const lastGuess = this.state.attempts[this.state.attempts.length -1];
							// call the method at = returns the value at the last item in the list
							// -1 counts backwards from the end of the array

		if (isNaN(lastGuess))
			alert("You need to make a guess first");

		let answerDistance = Math.ceil(Math.abs(this.state.target - lastGuess) / 10) * 10;
			alert(`You are within ${ answerDistance } of the answer.`)
	}

	reset() {
		this.setState({
			difficulty: null,
		})
	}

}

export default App;
