import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import App from "./App.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0, // disable retries by default, we will enable it for specific queries
      refetchOnWindowFocus: false, // disable refetching on window focus by default
      refetchOnReconnect: false, // disable refetching on reconnect by default
      refetchInterval: 5_000, // refetch every 5 seconds by default
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
