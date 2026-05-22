import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./styles.css";

import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ThemeProvider } from "@/components/site/ThemeProvider";

import Home from "@/routes/index";
import About from "@/routes/about";
import Services from "@/routes/services";
import Solutions from "@/routes/solutions";
import Internships from "@/routes/internships";
import Projects from "@/routes/projects";
import Contact from "@/routes/contact";

const queryClient = new QueryClient();

function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-semibold text-gradient-orange">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist.</p>
        <a href="/" className="mt-6 inline-flex items-center justify-center bg-orange-gradient px-5 py-2.5 text-sm font-medium text-primary-foreground">Go home</a>
      </div>
    </div>
  );
}

function CurrentPage() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  if (path === "/") return <Home />;
  if (path === "/about") return <About />;
  if (path === "/services") return <Services />;
  if (path === "/solutions") return <Solutions />;
  if (path === "/internships") return <Internships />;
  if (path === "/projects") return <Projects />;
  if (path === "/contact") return <Contact />;
  return <NotFound />;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Navbar />
        <main className="min-h-screen pt-16">
          <CurrentPage />
        </main>
        <Footer />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
