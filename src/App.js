import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';


const projects = [
  {
    title: 'Team Page Constructor', 
    repository: 'https://github.com/FlorSing/team-page-constructor' ,
    screenshot: 'https://github.com/FlorSing/team-page-constructor/blob/main/assets/teamPageConstructor.jpg', 
    deployment: 'https://github.com/FlorSing/team-page-constructor/blob/main/starter/output/team.html', 
  },

  {
    title: 'Password Generator ver.01', 
    repository: 'https://github.com/FlorSing/Password-Generator-ver.01' ,
    screenshot: 'https://github.com/FlorSing/Password-Generator-ver.01/blob/main/assets/images/05-javascript-challenge-demo.png', 
    deployment: 'https://florsing.github.io/Password-Generator-ver.01/' 
  },

  {
    tittle: 'Web Calendar Planner ',
    repository: 'https://github.com/FlorSing/Web-Calendar-Planner ',
    screenshot: 'https://user-images.githubusercontent.com/118206899/215060931-b0f4fd1d-7e1a-4d46-8462-0dc0b29fdf84.gif', 
    deployment: 'https://florsing.github.io/Web-Calendar-Planner/ '
  },

  {
    title: '5-day Weather Outlook Dashboard',
    repository: 'https://github.com/FlorSing/5-day-Weather-Outlook-Dashboard- ',
    screenshot: 'https://github.com/FlorSing/My-Portfolio-created-with-React-/blob/main/portfolio/assets/weatherforecastscreenshot.jpg',
    deployment: 'https://florsing.github.io/5-day-Weather-Outlook-Dashboard-/ '
  },
  
  {
    title: 'README.md Creator' ,
    repository: 'https://github.com/FlorSing/readme-creator' ,
    screenshot: 'https://github.com/FlorSing/readme-creator/blob/main/dist/Untitled_%20Mar%205%2C%202023%205_00%20PM.webm ',
    deployment: 'https://github.com/FlorSing/readme-creator/blob/main/dist/README.md '
  },

  {
  title: 'Web Quiz App Prototype ',
  repository: 'https://github.com/FlorSing/web-quiz-app-prototype' ,
  screenshot: 'https://user-images.githubusercontent.com/118206899/213149911-d30a2aff-f9b4-430c-b97a-beb6c8fe28ff.gif ',
  deployment: 'https://florsing.github.io/web-quiz-app-prototype/ '
  },

{
  title: 'WordGiffy (Group Project) ',
  repository: 'https://github.com/DavidBlueLamassu/WordGiffy ',
  screenshot:  'https://github.com/FlorSing/My-Portfolio-created-with-React-/blob/main/portfolio/assets/wordgiffyscreenshot.jpg',
  deployment: 'https://davidbluelamassu.github.io/WordGiffy/ '
},

];



function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="gallery" element={<Gallery />} />
          {/* Define a route that will have descendant routes */}
          <Route path="contact/*" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;