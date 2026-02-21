import { Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Hero from "./components/Hero/Hero";
import Masonry from "./components/Masonry/Masonry";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Products from "./pages/Products";
import Experiments from "./pages/Experiments";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <main id="main-content">
                <Hero />
                <Masonry />
                <About />
              </main>
              <Footer />
            </>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/experiments" element={<Experiments />} />
      </Routes>
      <SpeedInsights />
    </>
  );
}
