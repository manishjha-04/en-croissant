import { createLazyFileRoute } from '@tanstack/react-router';
import BoardsPage from "@/components/tabs/BoardsPage";

export const Route = createLazyFileRoute("/")({
  component: BoardsPage,
});