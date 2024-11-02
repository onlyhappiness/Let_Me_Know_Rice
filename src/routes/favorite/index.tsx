import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/favorite/")({
  component: () => <FavoritePage />,
});

function FavoritePage() {
  return <div>Favorite</div>;
}
