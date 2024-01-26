import "./styles/App.scss";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/Loader";

import Home from "./pages/Home";
import ACM_W from "./pages/ACM_W";
import About from "./pages/About";
import Events from "./pages/Events";
import Team from "./pages/Team";
import OpenSource from "./pages/OpenSource";
import Projects from "./pages/Projects";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/404NotFound";
import RSVP from "./pages/RSVP";
import Contribute from "./pages/Contribute";
import Gallery from "./pages/Gallery";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2500));
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/ACM-Women" element={<ACM_W />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/open-source" element={<OpenSource />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contribute" element={<Contribute />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/rsvp-15454" element={<RSVP />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
