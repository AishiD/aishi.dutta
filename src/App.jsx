import "./App.css";
import Header from "./components/Header";
import Home from "./components/Pages/Home";
import Academics from './components/Pages/Academics';
import Profile from './components/Pages/Profile';
import Skills from './components/Pages/Skills';
import Projects from './components/Pages/Projects';
import Publications from "./components/Pages/Publications";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/academics" element={<Academics />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
