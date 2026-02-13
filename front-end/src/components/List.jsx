import { useQuery } from "@tanstack/react-query";
import "./List.css";
import { peopleQueryOptions } from "../queries/peopleQueryOptions";

export const List = () => {
  const { data: people, isPending } = useQuery(peopleQueryOptions);

  if (isPending) {
    return <p>Ładowanie...</p>;
  }

  return (
    <ul>
      {people?.map((person) => (
        <li key={person.id}>{person.name}</li>
      ))}
    </ul>
  );
};
