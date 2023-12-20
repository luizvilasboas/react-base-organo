import { v4 as uuidv4 } from "uuid";
import { darken } from "polished";
import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import Selection from "../Selection";
import "./index.css";

const Form = (props) => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamColor, setTeamColor] = useState("");

  const onSave = (event) => {
    event.preventDefault();
    props.onColaboratorSigned({
      id: uuidv4(),
      name: name,
      job: job,
      image: image,
      team: team,
      favorite: false,
    });

    setName("");
    setJob("");
    setImage("");
    setTeam("");
  };

  const onTeamCreate = (event) => {
    event.preventDefault();
    props.onTeamSigned({
      id: uuidv4(),
      name: teamName,
      primaryColor: teamColor,
      secondaryColor: darken(0.1, teamColor),
    })

    setTeamName("");
    setTeamColor("");
  }

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Input
          onChange={(value) => setName(value)}
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
        />
        <Input
          onChange={(value) => setJob(value)}
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={job}
        />
        <Input
          onChange={(value) => setImage(value)}
          required={true}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={image}
        />
        <Selection
          onChange={(value) => setTeam(value)}
          required={true}
          label="Time"
          items={props.teams}
          value={team}
        />
        <Button>Criar Card</Button>
      </form>
      <form onSubmit={onTeamCreate}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Input
          onChange={(value) => setTeamName(value)}
          required={true}
          label="Nome"
          placeholder="Digite o nome do time"
          value={teamName}
        />
        <Input
          onChange={(value) => setTeamColor(value)}
          required={true}
          label="Cor"
          placeholder="Digite a cor do time"
          value={teamColor}
          type="color"
        />
        <Button>Criar Time</Button>
      </form>
    </section>
  );
};

export default Form;
