import './App.css';
import Gallery from "./components/Gallery.js"
import ResponsiveRedesign from "./components/projects/ResponsiveRedesign.js"
import Development from "./components/projects/Development.js"
import IterativeDesign from "./components/projects/IterativeDesign.js"
import AnimatedLSystems from './components/projects/AnimatedLSystems.js';
import AboutMe from './components/AboutMe.js';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import YardIcon from '@mui/icons-material/Yard';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import projectData from './assets/project-data.json'

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
projectData.forEach((item) => {
    item.image = process.env.PUBLIC_URL + "/" + item.image;
  });
  /* ############################################################## */  

function App() {
  const [page, setPage] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setPage(newValue)
  };

  const renderPage = () => {
    switch(page) {
      case 0: return <Gallery projectData={projectData} setPage={setPage} />
      case 1: return <AboutMe />
      case 2: {window.scrollTo(0, 0)
        return <ResponsiveRedesign />}
      case 3: {window.scrollTo(0, 0)
        return <Development />}
      case 4: {window.scrollTo(0, 0)
        return <IterativeDesign />}
      case 5: {window.scrollTo(0, 0)
        return <AnimatedLSystems />}
      default: return null
    }
  }


    // (page == 0) ? <Gallery projectData={projectData} setPage={setPage}/> : null

  
  return (
    <div className="App">
      <div id="Tabs">
        <Tabs value={(page == 0 || page == 1) ? page : false} onChange={handleChange}>
          <Tab icon={<YardIcon />} label="GALLERY" />
          <Tab icon={<PersonPinIcon />} label="ABOUT ME" />
        </Tabs>
      </div>

    {renderPage()}

    </div>
    );
  }
  
  export default App;
  