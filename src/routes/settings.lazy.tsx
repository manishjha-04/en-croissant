import { createLazyFileRoute } from '@tanstack/react-router';
import SettingsPage from "@/components/settings/SettingsPage";
import { getVersion } from "@tauri-apps/api/app";

export const Route = createLazyFileRoute("/settings")({
  component: SettingsPage,
});