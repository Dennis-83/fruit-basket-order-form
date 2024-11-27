
function FruitCounter({icon, title,name, counter, setCounterState}) {
    console.log(setCounterState);
    return (
        <div className="fruit-counter"> {icon}{title}
            <button disabled={counter <= 0}
                    type="button" onClick={() => setCounterState.name(counter - 1)}>
                -
            </button>
            {counter}
            <button type="button" onClick={() => setCounterState.name(counter + 1)}>
                +
            </button>
        </div>
    );
}

export default FruitCounter;