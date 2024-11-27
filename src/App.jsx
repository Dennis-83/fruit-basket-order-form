import './App.css'
import {useState} from "react";
import FruitCounter from "./assets/components/FruitCounter/FruitCounter.jsx";

function App() {
    const [counterState, setCounterState] = useState({
        strawberryCounter: 0,
        bananaCounter: 0,
        appleCounter: 0,
        kiwiCounter: 0
    });

    function handleClick(counterName, newValue) {
        setCounterState({
            ...counterState,
            [counterName] : (counterState[counterName] + newValue)
        })
        // console.log(counter, newValue);
        // console.log(counterState);
    }

    function resetCounters() {
        // console.log(counterState);

        // Dynamisch resetten van de counters - ongeacht het aantal in het state-object,
        // Object.keys leest het object uit in een array om overheen te mappen
        // Object.fromEntries maakt van de array weer een object zoals de state terugverwacht
        setCounterState((prevState) =>
            Object.fromEntries(Object.keys(prevState).map((key) => [key, 0]))
        );
        // Handmatig resetten van de counters
        // setCounterState({
        //     bananaCounter: 0,
        //     strawberryCounter: 0,
        //     appleCounter: 0,
        //     kiwiCounter: 0
        // });
    }


    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <div className="fruit-counter"> Aardbeien 🍓
                <button disabled={counterState.strawberryCounter <= 0}
                        type="button" onClick={() => handleClick('strawberryCounter', -1)}>
                    -
                </button>
                {counterState.strawberryCounter}
                <button type="button" onClick={() => handleClick('strawberryCounter', +1)}>
                    +
                </button>
            </div>
            <div className="fruit-counter"> Bananen 🍌
                <button disabled={counterState.bananaCounter <= 0}
                        type="button" onClick={() => handleClick('bananaCounter', -1)}>
                    -
                </button>
                {counterState.bananaCounter}
                <button type="button" onClick={() => handleClick('bananaCounter', +1)}>
                    +
                </button>
            </div>
            <div className="fruit-counter"> Appels 🍏
                <button disabled={counterState.appleCounter <= 0}
                        type="button" onClick={() => handleClick('appleCounter', -1)}>
                    -
                </button>
                {counterState.appleCounter}
                <button type="button" onClick={() => handleClick('appleCounter', +1)}>
                    +
                </button>
            </div>
            <div className="fruit-counter"> Kiwi's 🥝
                <button disabled={counterState.kiwiCounter <= 0}
                        type="button" onClick={() => handleClick('kiwiCounter', -1)}>
                    -
                </button>
                {counterState.kiwiCounter}
                <button type="button" onClick={() => handleClick('kiwiCounter', +1)}>
                    +
                </button>
            </div>

            {/*<FruitCounter*/}
            {/*    icon="🍓"*/}
            {/*    title = "Aardbeien"*/}
            {/*    name = "strawberryCounter"*/}
            {/*    counter={counterState.strawberryCounter}*/}
            {/*    setCounterState={setCounterState}*/}
            {/*/>*/}
            {/*<FruitCounter*/}
            {/*    icon="🍌"*/}
            {/*title="Bananen"*/}
            {/*counter={counter}*/}
            {/*setCounter={setCounter}*/}
            {/*/>*/}

            <button type="button" onClick={resetCounters}>Reset</button>
        </>
    )
}

export default App
