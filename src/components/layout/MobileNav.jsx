import { Home, User, MessageCircle, Bell } from "lucide-react";
import { NavLink } from "react-router-dom";

const MobileNav = () => {
  return (
    <nav className="mobile-nav">
      <NavLink to="/"><Home /></NavLink>
      <NavLink to="/profile"><User /></NavLink>
      <NavLink to="/messages"><MessageCircle /></NavLink>
      <NavLink to="/notifications"><Bell /></NavLink>
    </nav>
  );
};

export default MobileNav;
