import "./List.css";
import { usePeopleQuery } from "../hooks/usePeopleQuery";

export const List = () => {
  const { data: people } = usePeopleQuery();

  return (
    <ul>
      {people?.map((person) => (
        <li key={person.id}>{person.name}</li>
      ))}
    </ul>
  );
};
