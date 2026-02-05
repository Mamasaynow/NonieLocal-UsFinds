import { Home, Star, Grid3X3, Award, MapPin, Heart, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/pick-of-the-week", icon: Star, label: "Pick" },
  { to: "/shop-by-room", icon: Grid3X3, label: "Rooms" },
  { to: "/certifications", icon: Award, label: "Guide" },
  { to: "/local-shops", icon: MapPin, label: "Shops" },
  { to: "/favorites", icon: Heart, label: "Favorites" },
  { to: "/settings", icon: Settings, label: "Settings" },
];

const BottomNav = () => {
  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border shadow-soft"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-2">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center justify-center gap-1 px-2 py-2 rounded-xl transition-colors min-w-[52px]",
                isActive
                  ? "text-primary bg-leaf-light"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )
            }
          >
            <Icon className="w-5 h-5" aria-hidden="true" />
            <span className="text-xs font-medium">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
