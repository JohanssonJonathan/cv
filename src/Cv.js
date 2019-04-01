import React, { Component } from "react";
import "./css/App.css";
import "./css/cv.css";
import ProjectsContainer from "./Projects";
import Skills from "./Skills";
import ImageScroll from "./ImageScroll";
import Transition from "./UI/Transition";
import Fade from "react-reveal/Fade";

import kid from "./images/profil.png";

const localStyles = {
  letterContainer: {
    width: "100%",
    height: 450,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "10px solid rgba(0,0,0,.7)"
  }
};

const Info = () => {
  return (
    <Fade>
      <div style={localStyles.letterContainer}>
        <div>
          <p style={{ marginTop: 50, fontSize: 20 }}>
            My name is Jonathan Johansson I am a frontend-developer based in
            Gothenburg, Sweden
          </p>
        </div>
        <img src={kid} className="profile" />
      </div>
    </Fade>
  );
};

const AnimatedContainer = ({
  showSkills,
  onClick,
  currentSkill,
  resetSkills
}) => {
  return (
    <div className="content">
      <Info />
      <Skills
        showSkills={showSkills}
        onClick={onClick}
        currentSkill={currentSkill}
        resetSkills={resetSkills}
      />
      <ProjectsContainer />

      <div />
    </div>
  );
};

class Cv extends Component {
  state = {
    displayOrNot: "none",
    showSmallImage: false,
    showSkills: false,
    currentSkill: null
  };

  updateSkill = skill => {
    this.setState({
      currentSkill: skill
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", e => {
      let scrollPos =
        window.scrollY ||
        window.scrollTop ||
        document.getElementsByTagName("html")[0].scrollTop;

      this.setState(() => ({
        showSmallImage: scrollPos > 400 ? true : false
      }));

      if (scrollPos > 200) {
        this.setState(() => ({
          showSkills: true
        }));
      }
    });
  }

  render() {
    const { showCv } = this.props;

    const transitionProps = {
      start: showCv,
      timeout: 200,
      classNames: "showCv",
      onEntered: () => {
        this.setState({
          displayOrNot: "block"
        });
      }
    };
    const {
      showSmallImage,
      showSkills,
      currentSkill,
      displayOrNot
    } = this.state;
    return (
      <React.Fragment>
        <Transition {...transitionProps}>
          <div className="wrapper">
            <div className="underline" style={{ display: displayOrNot }} />
            <div style={{ display: displayOrNot }}>
              <ImageScroll showSmallImage={showSmallImage} />
              <AnimatedContainer
                showSkills={showSkills}
                onClick={skill => this.updateSkill(skill)}
                currentSkill={currentSkill}
                resetSkills={() => this.setState({ currentSkill: null })}
              />
            </div>
          </div>
        </Transition>
      </React.Fragment>
    );
  }
}

export default Cv;
