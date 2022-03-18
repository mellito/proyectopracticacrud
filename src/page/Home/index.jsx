import React, { useEffect, useState } from "react";
import showAllPerson from "../../services/user";

const Home = () => {
  const [person, setPerson] = useState([]);

  const showPerson = async () => {
    const data = await showAllPerson();
    setPerson(data);
  };

  useEffect(() => {
    showPerson();
  }, []);

  return (
    <div>
      <h3>TODAS LAS PERSONAS EN MI BASE DE DATOS</h3>
      {person.map((person) => {
        return (
          <div key={person.id}>
            <h2>{person.name}</h2>
            <span>{person.last}</span> - <span>{person.edad}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
