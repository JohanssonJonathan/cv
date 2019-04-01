import React from "react";
import "./css/App.css";
import "./css/cv.css";
import Fade from "react-reveal/Fade";

import instagram from "./images/social/instagram.png";
import linkedin from "./images/social/linkedin.png";
import git from "./images/social/git.png";
import profil from "./images/jonte.jpg";

const localStyles = {
  marginLeft: {
    marginLeft: 10
  },
  size: {
    width: 25,
    height: 25,
    cursor: "pointer"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
    width: "100%",
    marginRight: 40,
    marginTop: 10
  }
};

const Icon = ({ src, url, style }) => {
  const openLinkInNewTab = url => {
    const win = window.open(url, "_blank");
    win.focus();
  };
  return (
    <img
      src={src}
      style={{ ...localStyles.size, ...style }}
      onClick={() => openLinkInNewTab(url)}
    />
  );
};

const IconsAndNames = () => {
  return (
    <div style={localStyles.container}>
      <span style={{ marginRight: 20 }}>Jonathan Johansson</span>
      <div style={localStyles.content}>
        <Icon
          src={instagram}
          url="https://www.instagram.com/jjonathanjjohansson/"
        />
        <Icon
          src={git}
          url="https://github.com/JohanssonJonathan"
          style={localStyles.marginLeft}
        />
        <Icon
          src={linkedin}
          url="https://www.linkedin.com/in/jonathan-johansson/"
          style={localStyles.marginLeft}
        />
      </div>
    </div>
  );
};

const ImageScroll = ({ showSmallImage }) => {
  return (
    <Fade when={showSmallImage} bottom>
      <div className="smallImageContainer">
        <IconsAndNames />
        <img src={profil} className="image small" />
      </div>
    </Fade>
  );
};

export default ImageScroll;
