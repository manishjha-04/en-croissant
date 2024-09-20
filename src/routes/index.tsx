import BoardsPage from "@/components/tabs/BoardsPage";
import { createFileRoute } from "@tanstack/react-router";


  export const Route = createFileRoute("/")({
    loader: ({ context: { loadDirs } }) => loadDirs(),
  });

