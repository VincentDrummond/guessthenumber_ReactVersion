// the body
// here is the app interface, the presentation layer, the HTML
// store functional components

// dont use too much logic - pass down functionality from the App
// App component imports in from here to render the UI


export default function View(props) {
//use functional if there is no need to handle state
    return (
        <>
        <h1>Guess The Number</h1>
        <h2>Try to guess a number between 1 and 100 in less than 10 tries</h2>

        <input  type="text"
                placeholder="?"
                onChange={props.onChange}/>
                
        <button onClick={props.onClick}>Guess</button>

        {/* <button onClick={props.getHelp}>Help</button> */}
        </>
    );
}