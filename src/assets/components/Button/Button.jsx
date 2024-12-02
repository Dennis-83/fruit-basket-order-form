function Button({type, title, disabled, onclick}) {
    // console.log(props);
    return (
        <button
            type= {type}
            disabled= {disabled}
            onClick={onclick}>
            {title}
        </button>
    );
}

export default Button;