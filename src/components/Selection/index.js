import "./index.css";

const Selection = (props) => {
  return (
    <div className="list">
      <label>{props.label}</label>
      <select
        onChange={(event) => props.onChange(event.target.value)}
        required={props.required}
        value={props.value}
      >
        {props.items.map((item) => {
          return <option key={item} value={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default Selection;
