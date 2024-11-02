import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/signup/")({
  component: () => <SignUpPage />,
});

function SignUpPage() {
  return <div>SignUp</div>;
}
