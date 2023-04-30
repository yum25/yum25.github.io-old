import logo from './logo.svg';
import './App.css';
import ImageCard from './components/ImageCard/index';
import './assets/Handmade.otf';

function App() {
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
          <img style={{height: "7vh", marginLeft: "3vh", marginRight: "3vh", marginTop: "3vh"}} src={require("./assets/Instagram - Negative.png")} alt="Instagram"/>
        </a>
        <a href="https://www.linkedin.com/in/marie-yu/">
          <img style={{height: "7vh", marginLeft: "3vh", marginRight: "3vh", marginTop: "3vh"}} src={require("./assets/LinkedIn - Negative.png")} alt="LinkedIn"/>
        </a>
        <a href="https://github.com/yum25">
          <img style={{height: "7vh", marginLeft: "3vh", marginRight: "3vh", marginTop: "3vh"}} src={require("./assets/Github - Negative.png")} alt="GitHub"/>
        </a>
        <img style={{height: "7vh", marginLeft: "3vh", marginRight: "3vh", marginTop: "3vh", marginBottom: "10vh"}} src={require("./assets/file-filled.png")} alt="Resume"/>
      </header>
      <body classname="App-body">
        <p>
          Projects
        </p>
        <img src={logo}/>
      </body>
      <footer className="App-footer">
        <p> Powered with React</p>
        <img src={logo} className="App-logo" alt="logo"/>
      </footer>
    </div>
  );
}

export default App;
