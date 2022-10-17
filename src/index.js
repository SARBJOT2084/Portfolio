import React from 'react';
import ReactDOM from 'react-dom/client';
// tailwind css
import './index.css';
// bootstrap 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//navbar
import Navbar from './Navbar.jsx';
// Basic description
import Describe from './Describe';
//About 
import About from './About';
// experience and projects done 
import Experience from './Experience';
// skills
import Skills from './Skills';
// education
import Education from './Education';
// certifications
import Certificate from './Certificate';

// contact
import Contacts from './Contact.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <div className="bg-[rgb(36,36,36)]  h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Navbar />

      {/*Navbar */}
      {/*Description */}
      <Describe />
      {/*About */}
      <section id="about">
        <About />
      </section>

      {/**Experience */}
      <section id="projects">
        <Experience />
      </section>

      {/**Skills */}
      <section id="skills">
        <Skills />
      </section>


      {/*Education */}
      <section id="education">
        <Education />
      </section>


      {/*Certfications*/}
      <Certificate />

      {/*Contacts */}
      <Contacts />


    </div>

  </React.StrictMode>
);



