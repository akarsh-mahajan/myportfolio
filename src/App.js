import './App.scss';
import Layout from './components/Layout';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skill';

function App() {
  return (
    <>
    <Routes>
      <Route path = "/" element = {<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="skills" element={<Skills />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
