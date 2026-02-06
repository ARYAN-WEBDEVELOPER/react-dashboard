import { useState } from "react";
import { Menu } from "lucide-react";

import Sidebar from "./Sidebar";
import RightPanel from "./RightPanel";
import MobileNav from "./MobileNav";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* MOBILE MENU BUTTON */}
      <button
        className="menu-btn"
        onClick={() => setSidebarOpen(true)}
      >
        <Menu size={26} />
      </button>

      <div className="dashboard">
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main className="main-content">{children}</main>

        <RightPanel />
      </div>

      <MobileNav />
    </>
  );
};

export default DashboardLayout;
