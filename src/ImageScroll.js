import React, { Component } from "react";
import "./css/App.css";
import "./css/cv.css";
import Fade from "react-reveal/Fade";


import instagram from "./images/social/instagram.png";
import linkedin from "./images/social/linkedin.png";
import git from "./images/social/git.png";
import profil from "./images/jonte.jpg";




const ImageScroll = ({ showSmallImage }) => {
    const openLinkInNewTab = url => {
      const win = window.open(url, "_blank");
      win.focus();
    };
  
    return (
      <Fade when={showSmallImage} bottom>
        <div className="smallImageContainer">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <span style={{ marginRight: 20 }}>Jonathan Johansson</span>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                flexDirection: "row",
                width: "100%",
                marginRight: 40,
                marginTop: 10
              }}
            >
              <img
                src={instagram}
                style={{ width: 20, height: 20, cursor: "pointer" }}
                onClick={() =>
                  openLinkInNewTab(
                    "https://www.instagram.com/jjonathanjjohansson/"
                  )
                }
              />
              <img
                src={git}
                style={{
                  width: 20,
                  height: 20,
                  marginLeft: 10,
                  cursor: "pointer"
                }}
                onClick={() =>
                  openLinkInNewTab("https://github.com/JohanssonJonathan")
                }
              />
              <img
                src={linkedin}
                style={{
                  width: 20,
                  height: 20,
                  marginLeft: 10,
                  cursor: "pointer"
                }}
                onClick={() =>
                  openLinkInNewTab(
                    "https://www.linkedin.com/in/jonathan-johansson/"
                  )
                }
              />
            </div>
          </div>
          <img src={profil} className="image small" />
        </div>
      </Fade>
    );
  };
  
  
  
export default ImageScroll 
  
  
  