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
    const [formState, setFormState] = useState({
        firstname: '',
        lastname: '',
        age: 0,
        postcode: '',
        deliveryFrequency: '',
        timeslot: 'day',
        comments: '',
        terms: false

    });

    function handleClick(counterName, newValue) {
        setCounterState({
            ...counterState,
            [counterName]: (counterState[counterName] + newValue)
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

    function handleChange(e) {
        const changedFieldName = e.target.name;
        console.log(e.target.value);
        const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
    }

    function handleSubmit() {
        console.log(formState);
        console.log(counterState);
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <section>

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
            </section>

            <form className="order-form">
                <p><label htmlFor="firstname">Voornaam
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        value={formState.firstname}
                        onChange={handleChange}
                    />
                </label></p>
                <p><label htmlFor="lastname">Achternaam
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        value={formState.lastname}
                        onChange={handleChange}
                    /></label></p>
                <p><label htmlFor="age">Leeftijd
                    <input
                        type="text"
                        id="age"
                        name="age"
                        value={formState.age}
                        onChange={handleChange}
                    /></label></p>
                <p><label htmlFor="postcode">Postcode
                    <input type="text"
                           id="postcode"
                           name="postcode"
                           value={formState.postcode}
                           onChange={handleChange}
                    /></label></p>
                <p><label htmlFor="delivery-frequency">Bezorgfrequentie</label></p>
                <p><select
                    name="deliveryFrequency"
                    id="delivery-frequency"
                    onChange={handleChange}>
                    <option value="weekly">Iedere week</option>
                    <option value="fortnightly">Om de week</option>
                    <option value="monthly">Iedere maand</option>
                </select></p>
                <p><label htmlFor="day">
                    <input
                        type="radio"
                        id="day"
                        name="timeslot"
                        value="day"
                        checked={formState.timeslot === "day"}
                        onChange={handleChange}
                    />Overdag</label>
                    <label htmlFor="night">
                        <input
                            type="radio"
                            id="night"
                            name="timeslot"
                            value="night"
                            checked={formState.timeslot === "night"}
                            onChange={handleChange}
                        />'s Avonds</label></p>
                <p>Opmerking</p>
                <label htmlFor="comments">
                    <textarea
                        name="comments"
                        id="comments"
                        cols="30"
                        rows="10"
                        value={formState.comments}
                        onChange={handleChange}
                    ></textarea></label>
                <p><label htmlFor="terms"><input
                    type="checkbox"
                    name="terms"
                    id="terms"
                    checked={formState.terms}
                    onChange={handleChange}

                    />Ik ga akkoord met de voorwaarden</label></p>

                {/*Verzend button logt zowel formState als counterState in de terminal*/}
                <button type="button" onClick={handleSubmit}>Verzend</button>

            </form>


        </>
    )
}

export default App
