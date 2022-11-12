import React from "react";
import Footer from "./footer";
import Navigation from "./nav";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
