import "./App.css";
import Header from "./components/Header";
import Home from "./components/Pages/Home";
import Academics from './components/Pages/Academics';
import Profile from './components/Pages/Profile';
import Skills from './components/Pages/Skills';
import Projects from './components/Pages/Projects';
import Contact from "./components/Pages/Contact";
import { Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
function App() {
  return (
    <>
      <div>
        <Analytics />
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
