import { ROUTES } from "@/app/lib/constant";
import { cn } from "@/shared/lib";
import {
  HeartIcon,
  HouseIcon,
  MessageCircleIcon,
  SearchIcon,
  UserRoundIcon,
} from "lucide-react";
import React from "react";
// import { NavLink } from "react-router-dom";
import { Link, useLocation } from "@tanstack/react-router";

const navItems = [
  {
    to: ROUTES.COMMUNITY,
    label: "커뮤니티",
    icon: <MessageCircleIcon />,
    // icon: <Icon name="MessageCircle"  />,
  },
  {
    to: ROUTES.SEARCH,
    label: "검색",
    icon: <SearchIcon />,
    //  icon: <Icon name="Search" />
  },
  {
    to: ROUTES.HOME,
    label: "홈",
    icon: <HouseIcon />,
    // icon: <Icon name="House" />
  },
  {
    to: ROUTES.FAVORITE,
    label: "즐겨찾기",
    icon: <HeartIcon />,
    // icon: <Icon name="Heart" />
  },
  {
    to: ROUTES.PROFILE,
    label: "프로필",
    icon: <UserRoundIcon />,
    // icon: <Icon name="UserRound" />
  },
];

const BottomNavigation: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <nav className="bg-white border-t border-gray-200 sticky bottom-0 left-0 right-0">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={cn(
              "flex flex-col items-center gap-1.5",
              pathname === item.to ? `text-[#FFA500]` : "text-gray-500"
            )}
            // className={({ isActive }) =>
            //   cn(
            //     "flex flex-col items-center gap-1.5",
            //     isActive ? `text-[#FFA500]` : "text-gray-500"
            //   )
            // }
          >
            {item.icon}
            <span className={cn("text-xs")}>{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;
