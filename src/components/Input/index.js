import "./index.css";

const Input = (props) => {
  const placeholderMod = `${props.placeholder}...`;

  return (
    <div className="text">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
        required={props.required}
        placeholder={placeholderMod}
        type={props.type}
      />
    </div>
  );
};

export default Input;
