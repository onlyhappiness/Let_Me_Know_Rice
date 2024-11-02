import Banner from "@/entities/home/ui/banner";
import OptionFilter from "@/entities/home/ui/option-filter";
import GoogleLoginButton from "@/features/auth/ui/google-login";
import MapView from "@/features/home/ui/map-view";
import Icon from "@/shared/ui/icon";
import { Input } from "@/shared/ui/input";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <header>
        <Input
          placeholder="Search"
          rightIcon={
            <button className="pl-2">
              <Icon name="Search" size={20} />
            </button>
          }
        />
      </header>

      <div className="flex items-center gap-3 w-full justify-between my-3">
        <OptionFilter />
        <MapView />
      </div>

      <Banner />

      <main>
        <GoogleLoginButton />
        {/* <button onClick={() => login()}>Sign in with Google 🚀 </button> */}
      </main>
    </div>
  );
}
