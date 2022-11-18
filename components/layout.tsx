import Head from "next/head";
import React from "react";
import Footer from "./footer";
import Navigation from "./nav";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <Head>
        <meta property="og:url" content="wwww.thepeer-blog.netlify.app" />

        <meta name="apple-mobile-web-app-status-bar-style" content="#070809" />
        <meta
          name="robots"
          property="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="og:locale" property="og:locale" content="en_US" />
      </Head>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
