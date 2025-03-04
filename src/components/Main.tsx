import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import avatar from '../assets/images/portret-circle.png';
import RedditIcon from '@mui/icons-material/Reddit';
import DiscordIcon from '@mui/icons-material/Discord';
function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://www.reddit.com/user/IvayloKartev/" target="_blank" rel="noreferrer"><RedditIcon/></a>
            <a href="https://www.discord.com" target="_blank" rel="noreferrer"><DiscordIcon/></a>
          </div>
          <h1>Ivaylo Kartev</h1>
          <p>Chemistry Tutor</p>

          <div className="mobile_social_icons">
            <a href="https://www.reddit.com/user/IvayloKartev/" target="_blank" rel="noreferrer"><RedditIcon/></a>
            <a href="https://www.discord.com" target="_blank" rel="noreferrer"><DiscordIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
