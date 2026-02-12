import { useQuery } from "@tanstack/react-query";
import "./Header.css";

export function Header() {
  const { data: people } = useQuery({
    queryFn: () =>
      fetch("http://localhost:3000/people").then((res) => res.json()),
    queryKey: ["people"],
  });

  return (
    <header>
      <h1>Lista osób {people && `${people.length}`}</h1>
    </header>
  );
}
