import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/siginin/")({
  component: SignInPage,
});

function SignInPage() {
  return <div>SignIn</div>;
}
