// the body
// here is the app interface, the presentation layer, the HTML
// store functional components

// dont use too much logic - pass down functionality from the App
// App component imports in from here to render the UI

// functional components DO NOT need imports
// (unless you're using state)
// all you're doing is making a function

export default function View({
//  use functional components if there is no need to handle state
// this has been destructured from props
// so now props. can be deleted
    difficulty,
    guess,
    attempts,

    lower,
    upper,
    attemptsLeft,

    onGuessButton,
    onHelpButton,
    onInitialise,
    onResetButton,
    onInput
}) {

    if (difficulty) {
        return (
        <>
            <header>
                <h1>Guess The Number</h1>
            </header>

                <div className="gameBoard">
                    <p className="selectedMode">Difficulty Mode: <span>&nbsp;{difficulty}</span></p>
                    <div className="info-text">
                            <p>Guess range: <span>{lower}</span> to <span>{upper}</span></p>
                            <p>Tries left: <span>{attemptsLeft}</span></p>
                    </div>

                                <input  onChange={onInitialise}
                                        type="number"
                                        placeholder="?" 
                                        value={guess} />

                        <div className="buttonsSection">
                                <button onClick={onHelpButton}>Help</button>
                                <button onClick={onGuessButton}>Guess</button>
                                <button onClick={onResetButton}>Reset</button>
                        </div>
                </div>

            <footer>
                <p>Built by G. Robertson &amp; V. Drummond</p>
            </footer>

        </>

        );
    } else {
        return (
        <>
            <header>
                <h1>Guess The Number</h1>
            </header>

            <div className="gameBoard">
                <select onChange={onInitialise}>
                    <option>Choose a difficulty level</option>
                    <option value="easy">Go easy on me</option>
                    <option value="medium">This ain't my first rodeo</option>
                    <option value="hard">Pain is good</option>
                </select>
            </div>

            <footer>
                <p>Built by G. Robertson &amp; V. Drummond</p>
            </footer>
        </>
        )
    }
    }