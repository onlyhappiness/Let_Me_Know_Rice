import BottomNavigation from "@/widgets/footer/ui/bottom-navigation";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div className="flex justify-center items-center min-h-screen bg-[gray]">
      <div className="w-full h-full max-w-md min-h-screen flex flex-col bg-white shadow-lg overflow-hidden">
        <main className="flex-grow overflow-y-auto scrollbar-hide">
          <div className="p-4 pb-20">
            <Outlet />
            {/* {children} */}
          </div>
        </main>

        <BottomNavigation />
      </div>
    </div>
  ),
});
