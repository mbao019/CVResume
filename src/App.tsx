import React from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from './components/nav';
import CoverLetter from './components/coverLetter';
import Skills from './components/skills';
import Education from './components/education';
import WorkExp from './components/workExp';
import CoopExp from './components/coopExp';
import SchoolProjects from './components/schoolProjects';
import RnExp from './components/rnExp';
import Volunteering from './components/volunteering';
import Hobbies from './components/hobbies';
import Contact from './components/contact';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>

        {/* <Nav />
        <CoverLetter />
        <Skills />
        <Education />
        <WorkExp />
        <CoopExp />
        <SchoolProjects />
        <RnExp />
        <Volunteering />
        <Hobbies />
        <Contact />  */}


      </header>
    </div>
  );
}

export default App;
