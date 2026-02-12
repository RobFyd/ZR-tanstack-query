export const peopleQueryOptions = {
  queryFn: () =>
    fetch("http://localhost:3000/people").then((res) => res.json()),
  queryKey: ["people"],
};
