import React from 'react';
import logo from './logo.svg';
import './App.css';

import ImageCard from './components/ImageCard/index';
import ProjectCard from './components/ProjectCard';

import './assets/Handmade.otf';
import { PROJECTS } from './constants';

function App() {

  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      
      <header className="App-header">
        <p>
          Hi there! I'm Marie
        </p>
       <ImageCard></ImageCard>
      </header>
      <header className="image-instructions">
        <img className="customArrow" src={require("./assets/arrow.png")} alt=""/>
        <p>
          Click on me to learn more!
        </p>
      </header>
      <header className="socials">
        <a href="https://www.instagram.com/mri_yu/">
          <img src={require("./assets/Instagram - Negative.png")} alt="Instagram"/>
        </a>
        <a href="https://www.linkedin.com/in/marie-yu/">
          <img src={require("./assets/LinkedIn - Negative.png")} alt="LinkedIn"/>
        </a>
        <a href="https://github.com/yum25">
          <img src={require("./assets/Github - Negative.png")} alt="GitHub"/>
        </a>
        <a href="https://docs.google.com/document/d/1vyROUJljgeV88h_tMcBbBdrgy4t4K_RCxCI30ic_Uks/edit?usp=sharing">
        <img src={require("./assets/file-filled.png")} alt="Resume"/>
        </a>
      </header>
      <header className="scroll-down">
        <img onClick={() => handleClickScroll("body-1")} src={require("./assets/down-arrow.png")} alt="Scroll Down"/>
      </header>

      <body id="body-1" className="App-body">
       { PROJECTS.map((item, index) => {
        return <ProjectCard 
          title={item.title}
          description={item.description}
          image={item.image}
          style={item.style}
          backgroundColor={item.backgroundColor}
          backgroundImage={item.backgroundImage}
          altText={item.altText}
        />
        })}
      </body>
      <footer className="App-footer">
        <p>Powered with React</p>
        <img src={logo} className="App-logo" alt="logo"/>
      </footer>
    </div>
  );
}

export default App;
