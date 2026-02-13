import { queryOptions } from "@tanstack/react-query"; // makes working with TS easier

export const peopleQueryOptions = queryOptions({
  queryFn: () =>
    fetch("http://localhost:3001/people").then((res) => res.json()),
  queryKey: ["people"],
});
