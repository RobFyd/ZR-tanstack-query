import "./Header.css";
export function Header() {
  export const List = () => {
    const { data: people } = useQuery({
      queryFn: () =>
        fetch("http://localhost:3000/people").then((res) => res.json()),
      queryKey: ["people"],
    });
  };

  return (
    <header>
      <h1>Lista osób</h1>
    </header>
  );
}
