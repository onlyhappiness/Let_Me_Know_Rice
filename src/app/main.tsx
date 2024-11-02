import { routeTree } from "@/routeTree.gen";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../shared/base.css";
import { ReactQueryProvider } from "./provider/query-client";

// Import the generated route tree
// import { router } from "./provider/tanstack-router";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryProvider>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </ReactQueryProvider>
  </StrictMode>
);
