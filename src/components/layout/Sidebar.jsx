import { NavLink } from "react-router-dom";
import {
  Home,
  User,
  MessageCircle,
  Bell,
  LogOut,
  X,
} from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      
      {/* MOBILE CLOSE BUTTON */}
      <button className="close-btn" onClick={() => setSidebarOpen(false)}>
        <X size={24} />
      </button>

      <h2 className="logo">NeoConnect</h2>

      <nav className="nav">
        <NavLink to="/" className="nav-link" onClick={() => setSidebarOpen(false)}>
          <Home size={20} /> Home
        </NavLink>

        <NavLink to="/profile" className="nav-link" onClick={() => setSidebarOpen(false)}>
          <User size={20} /> Profile
        </NavLink>

        <NavLink to="/messages" className="nav-link" onClick={() => setSidebarOpen(false)}>
          <MessageCircle size={20} /> Messages
        </NavLink>

        <NavLink to="/notifications" className="nav-link" onClick={() => setSidebarOpen(false)}>
          <Bell size={20} /> Notifications
        </NavLink>
      </nav>

      <ThemeToggle />

      <button className="logout">
        <LogOut size={20} /> Logout
      </button>
    </aside>
  );
};

export default Sidebar;
