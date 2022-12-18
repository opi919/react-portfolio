import logo from './logo.svg';
import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        {/* if path is / then redirect to /home */}
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
