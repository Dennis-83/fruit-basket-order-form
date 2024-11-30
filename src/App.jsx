import './App.css'
import {useState} from "react";
import FruitCounter from "./assets/components/FruitCounter/FruitCounter.jsx";
import Button from "./assets/components/Button/Button.jsx";

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
                <FruitCounter
                    icon = '🍓'
                    title='Aardbeien'
                    fruitType = 'strawberry'
                    counter = {counterState.strawberryCounter}
                    handleClick = {handleClick}
                    />
                <FruitCounter
                    icon = '🍌'
                    title='Bananen'
                    fruitType = 'banana'
                    counter = {counterState.bananaCounter}
                    handleClick = {handleClick}
                />
                <FruitCounter
                    icon = '🍏'
                    title='Appels'
                    fruitType = 'apple'
                    counter = {counterState.appleCounter}
                    handleClick = {handleClick}
                />
                <FruitCounter
                    icon = '🥝'
                    title= "Kiwi's"
                    fruitType = 'kiwi'
                    counter = {counterState.kiwiCounter}
                    handleClick = {handleClick}
                 />

                <Button
                    type='button'
                    title='Reset'
                    onclick={resetCounters}
                />
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
                <Button
                    type='button'
                    title='Verzend'
                    onclick={handleSubmit}
                />

            </form>


        </>
    )
}

export default App
