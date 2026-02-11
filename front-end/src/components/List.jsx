import { useQuery } from "@tanstack/react-query";
import "./List.css";

export const List = () => {
  const { data: people } = useQuery({
    queryFn: () =>
      fetch("http://localhost:3000/people").then((res) => res.json()),
    queryKey: ["people"],
  });

  return (
    <ul>
      {people?.map((person) => (
        <li key={person.id}>{person.name}</li>
      ))}
    </ul>
  );
};
