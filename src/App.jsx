import './App.css'
import React from "react";

function App() {
    const [counter, setCounter] = React.useState(0);
    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <div className="fruit-counter-card"> 🍓 Aardbeien
                <button disabled= {counter <= 0}
                        type="button" onClick={() => setCounter(counter - 1)}>
                    -
                </button>
                {counter}
                <button type="button" onClick={() => setCounter(counter + 1)}>
                    +
                </button>
            </div>
            <button type="button" onClick={() => setCounter(0)}>Reset</button>
        </>
    )
}

export default App
