import Button from "../Button/Button.jsx";

function FruitCounter({icon, title, counter, handleClick, fruitType}) {
    // console.log(fruitType);
    return (
        <div className="fruit-counter"> {title} {icon}
            <Button
                type='button'
                title='-'
                disabled={counter <= 0}
                onclick={() => handleClick(`${fruitType}Counter`, -1)}
            />
            {counter}
            <Button
                type='button'
                title='+'
                onclick={() => handleClick(`${fruitType}Counter`, +1)}
            />
        </div>
    );
}

export default FruitCounter;