import {
  CommunityPage,
  FavoritePage,
  HomePage,
  ProfilePage,
  SearchPage,
} from "@/pages";
import MainLayout from "@/widgets/layout/ui/main-layout";
import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { ROUTES } from "../lib/constant";

const rootRoute = createRootRoute({
  component: MainLayout,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.HOME,
  component: HomePage,
});

const communityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.COMMUNITY,
  component: CommunityPage,
});

const searchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.SEARCH,
  component: SearchPage,
});

const favoriteRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.FAVORITE,
  component: FavoritePage,
});

const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.PROFILE,
  component: ProfilePage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  communityRoute,
  searchRoute,
  favoriteRoute,
  profileRoute,
]);

export const router = createRouter({ routeTree });
