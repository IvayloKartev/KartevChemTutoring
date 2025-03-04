import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'
import Reddit from "@mui/icons-material/Reddit";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/IvayloKartev/KartevChemTutoring" target="_blank" rel="noreferrer"><Reddit/></a>
        <a href="https://www.discord.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDiscord}/></a>
      </div>
      <p>Build by <a href="https://github.com/IvayloKartev/KartevChemTutoring" target="_blank" rel="noreferrer">Ivaylo Kartev</a></p>
    </footer>
  );
}

export default Footer;
