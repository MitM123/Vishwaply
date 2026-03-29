import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import AboutUs from "./Pages/AboutUs";
import ContactUS from "./Pages/ContactUS";
import OurProjects from "./Pages/OurProjects";
import Gallery from "./Pages/Gallery";

/** Scroll to top on every client-side navigation (fixes stale scroll position). */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/our-projects' element={<OurProjects />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUS />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
