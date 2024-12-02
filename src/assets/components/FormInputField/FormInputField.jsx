function FormInputField({title, name, value, onChange}) {
    return (
        <label htmlFor={name}>{title}
            <input
                type="text"
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            />
        </label>
    );
}

export default FormInputField;