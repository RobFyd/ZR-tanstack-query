import { useQuery } from "@tanstack/react-query";
import "./List.css";
import { peopleQueryOptions } from "../queries/peopleQueryOptions";

export const List = ({ onPersonSelect }) => {
  const { data: people, isPending, isError } = useQuery(peopleQueryOptions);

  if (isError) {
    return <p>Wystąpił błąd podczas pobierania danych.</p>;
  }

  if (isPending) {
    return <p>Ładowanie...</p>;
  }

  return (
    <ul>
      {people?.map((person) => (
        <li key={person.id} onClick={() => onPersonSelect(person.id)}>
          {person.name}
        </li>
      ))}
    </ul>
  );
};
