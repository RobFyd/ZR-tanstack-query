import { useEffect, useState } from "react";
import "./List.css";

export const List = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/people")
      .then((res) => res.json())
      .then((res) => setPeople(res));
  }, []);

  return (
    <ul>
      {people?.map((person) => (
        <li key={person.id}>{person.name}</li>
      ))}
    </ul>
  );
};
