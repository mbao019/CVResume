import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


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


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Nav />
    <CoverLetter />
    <Skills />
    <Education />
    <WorkExp />
    <CoopExp />
    <SchoolProjects />
    <RnExp />
    <Volunteering />
    <Hobbies />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
