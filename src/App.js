import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import React, { useState } from 'react';
import Footer from "./components/footer/footer";


function App() {
  const [activePage, setActivePage] = useState('Home');
  return (
    
    <div className="App">
      
      <Navbar setActivePage={setActivePage} />
            {activePage === 'Home' && <Intro />}
            {activePage === 'Skills' && <Skills />}
            {activePage === 'Projects' && <Projects />}
            {activePage === 'Contact' && <Contact />}
            <Footer/>
    </div>

  );
}

export default App;
