import { v4 as uuidv4 } from "uuid";
import { darken } from "polished";
import React, { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: "Programação",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      id: uuidv4(),
      name: "Front-End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      id: uuidv4(),
      name: "DevOps",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
  ]);

  const initial = [
    {
      id: uuidv4(),
      favorite: false,
      name: "JULIANA AMOASEI",
      job: "Desenvolvedora em Ruby",
      image:
        "https://randomuser.me/api/portraits/women/24.jpg",
      team: teams[0].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "DANIEL ARTINE",
      job: "Desenvolvedor em Python",
      image:
        "https://randomuser.me/api/portraits/men/59.jpg",
      team: teams[0].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "GUILHERME LIMA",
      job: "Desenvolvedor em Java",
      image:
        "https://randomuser.me/api/portraits/men/43.jpg",
      team: teams[0].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "PAULO SOUZA",
      job: "Desenvolvedor em C++",
      image:
        "https://randomuser.me/api/portraits/men/84.jpg",
      team: teams[0].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "FÁTIMA MACHADO",
      job: "Desenvolvedora React",
      image:
        "https://randomuser.me/api/portraits/women/40.jpg",
      team: teams[1].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "FABIANA MACHADO",
      job: "Desenvolvedora em Vue.js",
      image:
        "https://randomuser.me/api/portraits/women/27.jpg",
      team: teams[1].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "PEDRO COSTA",
      job: "Desenvolvedor em Angular",
      image:
        "https://randomuser.me/api/portraits/men/0.jpg",
      team: teams[1].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "MARIA PIA",
      job: "Desenvolvedora em Svelte",
      image:
        "https://randomuser.me/api/portraits/women/9.jpg",
      team: teams[1].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "LUIZ RICARDO",
      job: "Orquestrador de Clusters",
      image:
        "https://randomuser.me/api/portraits/men/89.jpg",
      team: teams[2].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "LUIZA FERREIRA",
      job: "Senior DevOps engineer",
      image:
        "https://randomuser.me/api/portraits/women/62.jpg",
      team: teams[2].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "GUILHERME VILELA",
      job: "Junio DevOps engineer",
      image:
        "https://randomuser.me/api/portraits/men/57.jpg",
      team: teams[2].name,
    },
    {
      id: uuidv4(),
      favorite: false,
      name: "PAULO SILVEIRA",
      job: "Pleno DevOps engineer",
      image:
        "https://randomuser.me/api/portraits/men/60.jpg",
      team: teams[2].name,
    },
  ];

  const [colaborators, setColaborators] = useState(initial);

  const onColaboratorSigned = (colaborator) => {
    setColaborators([...colaborators, colaborator]);
  };

  const deleteColaborator = (id) => {
    setColaborators(
      colaborators.filter((colaborator) => colaborator.id !== id)
    );
  };

  const changeTeamColor = (color, id) => {
    setTeams(
      teams.map((team) => {
        if (team.id === id) {
          team.secondaryColor = color;
          team.primaryColor = darken(0.1, color);
        }

        return team;
      })
    );
  };

  const onTeamSigned = (team) => {
    setTeams([...teams, team]);
  };

  const favoriteColaborator = (id) => {
    setColaborators(
      colaborators.map((colaborator) => {
        if (colaborator.id === id) {
          colaborator.favorite = !colaborator.favorite;
          console.log(colaborator);
        }

        return colaborator;
      })
    );
  };

  return (
    <div>
      <Banner />
      <Form
        teams={teams.map((team) => team.name)}
        onColaboratorSigned={onColaboratorSigned}
        onTeamSigned={onTeamSigned}
      />
      <section className="teams">
        <h1>Minha organização</h1>
        {teams.map((team, index) => (
          <Team
            changeTeamColor={changeTeamColor}
            key={index}
            id={team.id}
            name={team.name}
            primaryColor={team.primaryColor}
            secondaryColor={team.secondaryColor}
            colaborators={colaborators.filter(
              (colaborator) => colaborator.team === team.name
            )}
            onDelete={deleteColaborator}
            onFavorite={favoriteColaborator}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default App;
