import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  LayoutDashboard,
  FolderKanban,
  Settings,
  LogOut,
} from "lucide-react";
import LogoutModal from "@/components/LogoutModal";
import promanageLogo from "@/assets/promanage_logo.svg";

const navLinkClass =
  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13.5px] font-medium text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-800";

const activeNavLinkClass =
  "flex items-center gap-3 rounded-lg bg-[#4391ED1A] px-3 py-2.5 text-[13.5px] font-medium text-[#2570c7]";

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/projects", label: "Projects", icon: FolderKanban },
  { to: "/settings", label: "Settings", icon: Settings },
];

function SideBar() {
  const navigate = useNavigate();
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  return (
    <>
      <div className="flex h-full flex-col bg-white py-5 select-none">
        <div className="mb-8 flex items-center gap-2.5 px-5">
          <img
            src={promanageLogo}
            alt="Pro Manage"
            className="h-8 w-8 rounded-lg object-contain"
          />
          <span className="text-[15px] font-bold tracking-tight text-gray-900">
            Pro Manage
          </span>
        </div>

        <nav className="flex flex-1 flex-col gap-0.5 px-3">
          {navItems.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className={navLinkClass}
              activeProps={{ className: activeNavLinkClass }}
            >
              <Icon className="h-4 w-4 flex-shrink-0" strokeWidth={1.9} />
              {label}
            </Link>
          ))}
        </nav>

        <div className="px-3 pb-2">
          <button
            type="button"
            onClick={() => setIsLogoutOpen(true)}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-[13.5px] font-medium text-red-500 transition-colors hover:bg-red-50"
          >
            <LogOut className="h-4 w-4 flex-shrink-0" strokeWidth={1.8} />
            Logout
          </button>
        </div>
      </div>
      <LogoutModal
        open={isLogoutOpen}
        onCancel={() => setIsLogoutOpen(false)}
        onConfirm={() => {
          setIsLogoutOpen(false);
          navigate({ to: "/login" });
        }}
      />
    </>
  );
}

export default SideBar;
