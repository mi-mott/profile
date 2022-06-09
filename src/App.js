import './App.css'
import {useState} from 'react'
import { AiOutlineLinkedin, AiOutlineMail, AiOutlineGithub } from 'react-icons/ai'
import Box from './Components/Box.js'
import Loading from './Components/Loading.js'
import Progress from './Components/Progress.js'
import ContactForm from './Components/ContactForm.js'
import profile from './profile.png'

function App() {

  const languageTitle = "<Technologies/>"
  const [progress, setProgress] = useState("0");

  return (
    <div className="main">
      <div className="moving-text section">
        <div>
          <h1 className="title">Hi, my name is Thomas.</h1>
        </div>
        <div>
          <h5>Computer Science student at UNSW, aspiring full stack software engineer.</h5>
        </div>
      </div>
      
      <div className="intro section">
        <img className="profile-photo" src={profile} alt="profile"/>
      </div>
      <div>
        <div className="languagesMain">
          <div className="languages section">
            <div className="header">
              <p className="title">{languageTitle}</p>
            </div>
            <div>
              <Box id="1" setProgress={setProgress} image="https://www.datocms-assets.com/48401/1637694888-javascript-logo.svg"/>
              <Box id="2" setProgress={setProgress} image="https://images.ctfassets.net/mrop88jh71hl/55rrbZfwMaURHZKAUc5oOW/9e5fe805eb03135b82e962e92169ce6d/python-programming-language.png?w=1366&h=1366&q=100&fm=webp"/>
            </div>
            <div>
              <Box id="3" setProgress={setProgress} image="https://cdn.vox-cdn.com/thumbor/E5DWi80rhjNBn1zQwrEjX0dnkLY=/0x0:640x427/920x613/filters:focal(0x0:640x427):format(webp)/cdn.vox-cdn.com/assets/1087137/java_logo_640.jpg"/>
              <Box id="4" setProgress={setProgress} image="https://www.kindpng.com/picc/m/403-4039227_c-language-logo-png-transparent-png.png"/>
            </div>
          </div>
          <div className="display section">
            <Loading id={progress} />
            <Progress x={progress} text="" id="1"/>
            <Progress x={progress} text="" id="2"/>
            <Progress x={progress} text="" id="3"/>
            <Progress x={progress} text="" id="4"/>
          </div>
        </div>
      </div>
        <div className="contact section">
          <div className="contact1">
            <ContactForm />
          </div>
          <div className="icon">
            <a href="https://www.linkedin.com/in/tz2000/" target="_blank">
              <AiOutlineLinkedin className="icon" size="4em"/>
            </a>
            <a href="thomas.zhao@csesoc.org.au" target="_blank">
              <AiOutlineMail className="icon" size="4em" />
            </a>
            <a href="https://github.com/mi-mott" target="_blank">
              <AiOutlineGithub className="icon" size="4em" />
            </a>
          </div>
        </div>
    </div>
  )
}

export default App;
