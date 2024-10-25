import React from "react";
import HeroStyles from "./HeroStyles.module.css";
import HeroImage from "../../assets/profilephoto.png";
import sun from "../../assets/icons8-sun.svg";
import moon_theme from "../../assets/moon-4-32.png";
import linkedin from "../../assets/linkedin_dark.svg";
import linkedin_light from "../../assets/linkedin_light.svg";
import insta from "../../assets/instagram_dark.svg";
import insta_light from "../../assets/i_light.svg";
import leetcode from "../../assets/leetcode_dark.svg";
import leet_light from "../../assets/leet_light.svg";
import cv from "../../assets/Pitabash_Behera_resume.pdf";
import { useTheme } from "../../common/ThemeContext";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  const theme_icon = theme === "light" ? sun : moon_theme;
  const linkedin_icon = theme === "light" ? linkedin : linkedin_light;
  const insta_icon = theme === "light" ? insta : insta_light;
  const leet_icon = theme === "light" ? leetcode : leet_light;

  return (
    <section id="hero" className={HeroStyles.container}>
      <div className={HeroStyles.colorModeContainer}>
        <img className={HeroStyles.hero} src={HeroImage} alt="Hero-image" />

        <img
          className={HeroStyles.theme}
          src={theme_icon}
          alt="theme-icon"
          onClick={toggleTheme}
        />
      </div>

      <div className={HeroStyles.heroText}>
        <h1>Pitabash Behera</h1>
        <h2>Developer</h2>
        <span>
          <a href="https://www.linkedin.com/feed/">
            <img src={linkedin_icon} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/pitabash000/">
            <img src={insta_icon} alt="instagram" />
          </a>
          <a href="https://leetcode.com/u/Kuna1999n/">
            <img src={leet_icon} alt="leetcode" />
          </a>
        </span>
        <p>
          With a passion for developing modern web apps for commercial
          businesses.
        </p>
        <a href={cv} download>
          <button>Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
