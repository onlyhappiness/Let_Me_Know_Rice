import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/community/")({
  component: () => <CommunityPage />,
});

function CommunityPage() {
  return <div>Community</div>;
}
