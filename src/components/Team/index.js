import Colaborator from "../Colaborator";
import "./index.css";

const Team = (props) => {
  return (
    props.colaborators.length > 0 && (
      <section
        className="team"
        style={{ backgroundImage: "url(/images/fundo.png)", backgroundColor: props.secondaryColor }}
      >
        <input onChange={(event) => props.changeTeamColor(event.target.value, props.id)} value={props.secondaryColor} type="color" className="input-color" />
        <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
        <div className="colaborators">
          {props.colaborators.map((colaborator, index) => {
            return (
              <Colaborator
                key={index}
                id={colaborator.id}
                name={colaborator.name}
                job={colaborator.job}
                image={colaborator.image}
                favorite={colaborator.favorite}
                backgroundColor={props.primaryColor}
                onDelete={props.onDelete}
                onFavorite={props.onFavorite}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Team;
