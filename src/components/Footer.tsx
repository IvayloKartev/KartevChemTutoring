import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'
import RedditIcon from '@mui/icon-material/Reddit';
import DiscordIcon from '@mui/icon-material/Discord';

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/IvayloKartev/KartevChemTutoring" target="_blank" rel="noreferrer"><RedditIcon/></a>
        <a href="https://www.discord.com" target="_blank" rel="noreferrer"><DiscordIcon/></a>
      </div>
      <p>Build by <a href="https://github.com/IvayloKartev/KartevChemTutoring" target="_blank" rel="noreferrer">Ivaylo Kartev</a></p>
    </footer>
  );
}

export default Footer;
