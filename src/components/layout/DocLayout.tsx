import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import "../../styles/docs-layout.css";
import { useState } from "react";
import Headerbar from "./Headerbar";
import Footer from "./Footer";

function DocsLayout() {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  return (
    <>
      <Headerbar onToggleSidebar={() => setIsMobileSidebarOpen(true)} />
      <div className="docs-layout">
        <Sidebar
          isMobileOpen={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
        />

        <main className="docs-content">
          <Outlet />
          <Footer/>
        </main>
      </div>
    </>
  );
}

export default DocsLayout;