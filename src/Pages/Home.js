import React from 'react'
import BotAnim from "./../components/animations/Bot";
import Particles from "react-particles-js";

const Home = () => {

  const CurrentYear = () => {
    let today = new Date();
    today.setDate(today.getDate());
    let yyyy = today.getFullYear();

    return yyyy;
  };


  return (
    <div className="HomePage">

      <div className="particlesBox">
        <Particles 
          params={{
            particles: {
              line_linked: {
                shadow: {
                  enable: false,
                  color: "#3CA9D1",
                  blur: 5
                }
              }
            }
          }}
          style={{
            height: '100vh',
            width: '100vw',
          }}
        />
      </div>

      <div className="leftBox">
        <div className="requirementsBox">
          <h4>Requirements <span role="img" aria-label="check emoji">✅</span></h4>
          <ul>
            <li>Mery-Ai only works with the browser <strong>"google chrome"</strong>, so make sure to have it installed</li>
            <li>Due to the computer controlling comands, the code <strong>must be downloaded and booted locally</strong></li>
            <li>The libraries and commands are <strong>MacOs specific</strong>, so this only works on apple computers</li>
            <li>You must have installed <strong>github and nodejs in your computer</strong> in order to clone the code repository</li>
          </ul>
        </div>
        <div className="usageBox">
          <h4>Installation and Usage <span role="img" aria-label="check emoji">⚙️</span></h4>
          <ol>
            <li>Open app "terminal" and run the next line of code to position yourself in the desktop: <strong> cd desktop</strong></li>
            <li>Download the repo by copying and entering the next line of code in the terminal: <strong>git clone https://github.com/Silver0401/JS-MeryAI.git</strong></li>
            <li>Enter the folder you just copied into your desktop by copying the next command in the terminal: <strong>cd JS-MeryAI</strong></li>
            <li>Run the following command to install dependencies and boot up MeryAI: <strong>npm install && npm run build && npm run LocalStart</strong></li>
          </ol>
        </div>
        <div className="commandsList">
          <h4>List of Commands <span role="img" aria-label="check emoji">🗣</span></h4>
          <ul>
            <li><strong>Hey Mery!</strong> (Command to call her)</li>
            <li><strong>Music Mode</strong> (allows you to controll the macOs app itunes)</li>
            <li>Music Mode Commands: <strong>play, pause/stop, next, previous, search song "song's name", search artis "artist's name", exit music mode</strong></li>
            <li>Volume Commands<strong>computer volume "0 - 100" (general volume) | itunes/music volume "0 - 100" (itunes volume)</strong> </li>
            <li><strong>Go to sleep</strong> (to deactivate mery temporarily)</li>
            <li><strong>Tell a joke / say a joke</strong> (Mery chooses and tells one random joke)</li>
            <li><strong>Exit/Quit App</strong> (to close Mery)</li>
            {/* <li> <strong>Hands free mode</strong> (allows you to control videos in either youtube, netflix, prime video, etc.)</li> */}
            {/* <li>Hands Free Mode Commands: <strong>Play, pause/stop, mute, unmute, full screen, small screen, exit hands free mode</strong></li> */}
          </ul>
        </div>
      </div>
      <div className="rightBox">
        <div className="textBox">
          <h1>Mery-AI</h1>
          <h2>Personal local voice assistant</h2>
          <h3>Created by Ismael M.C.</h3>
        </div>
        <div className="animBox">
          <BotAnim/>
        </div>
        <div className="footerBox">
          IMC all rights reserved - {CurrentYear()}
        </div>
      </div>
    </div>
  )
}

export default Home
