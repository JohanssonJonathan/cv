import React, { Component, Fragment } from "react";
import "./css/App.css";
import "./css/cv.css";
import Transition from "./UI/Transition";
import Fade from "react-reveal/Fade";
import profil from "./images/jonte.jpg";
import html from "./images/skills/html5.png";
import css from "./images/skills/css3.png";
import es from "./images/skills/es6.png";
import graphql from "./images/skills/graphql.png";
import prisma from "./images/skills/prisma.png";
import firebase from "./images/skills/firebase.png";
import react from "./images/skills/react.png";
import github from "./images/skills/github.png";
import mongodb from "./images/skills/mongodb.png";
import nodejs from "./images/skills/nodejs.png";
import vue from "./images/skills/vue.png";
import kid from "./images/profil.png";


const localStyles = {
  progressbar: {
    width: "100%",
    position: "absolute",
    top: 0
  },
  text: {
    textAlign: "left"
  },
  flip: {
    width: "50%",
    transform: " scaleX(-1)"
  },
  skillsContainer: {
    top: 0,
    left: 0,
    width: "50%",
    height: 100,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.8)"
  },
  htmlSkill: {
    top: 20,
    left: "50%",
    transform: "rotate(-23deg)"
  },
  cssSkill: {
    top: 0,
    left: "45%",
    transform: "rotate(23deg)"
  },
  javascripSkill: {
    top: 70,
    left: "30%",
    transform: "rotate(23deg)"
  },
  nodeSkill: {
    top: 65,
    left: "40%",
    transform: "rotate(13deg)"
  },
  apolloSkill: {
    top: 30,
    left: "37%",
    transform: "rotate(-13deg)"
  },
  graphqlSkill: {
    top: 80,
    left: "22%",
    transform: "rotate(-23deg)"
  },
  reactSkill: {
    top: 50,
    left: "45%",
    transform: "rotate(23deg)"
  },
  nativeSkill: {
    top: 20,
    left: "30%",
    transform: "rotate(-20deg)"
  },
  vueSkill: {
    top: 0,
    left: "35%",
    transform: "rotate(23deg)"
  },
  githubSkill: {
    top: 0,
    left: "25%",
    transform: "rotate(23deg)"
  },
  prismaSkill: {
    top: 0,
    left: "15%",
    transform: "rotate(-13deg)"
  },
  jsonSkill: {
    top: 30,
    left: "18%",
    transform: "rotate(23deg)"
  },
  ajaxSkill: {
    top: 40,
    left: "5%",
    transform: "rotate(23deg)"
  },
  mongodbSkill: {
    top: 60,
    left: "10%",
    transform: "rotate(-23deg)"
  },
  firebaseSkill: {
    top: 0,
    left: "3%",
    transform: "rotate(-23deg)"
  },
  letterContainer: {
    width: "100%",
    height: 450,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom:"10px solid rgba(0,0,0,.7)"
  },
  letter: { textAlign: "center", width: "50%" }
};



const Name = () => {
  return (
    <div>
      <div className="underline" />
    </div>
  );
};

const Letter = () => {
  return (
    <Fade>
      <div style={localStyles.letterContainer}>
        <div>
          <span className="font">Hello!</span>
          <p style={{ marginTop: 50 }}>
            My name is Jonathan Johansson, and I am a frondend-developer based
            in Gothenburg Sweden
          </p>
          <p>Please scroll down to follow my journey as a developer</p>
        </div>
          <img src={kid} className="kid" />
      </div>
    </Fade>
  );
};

const Skill = ({ children, style }) => {
  return (
    <span className="skill" style={style}>
      {children}
    </span>
  );
};

const Header = ({ display }) => {
  return (
    <div style={{ display }}>
      <Name />
    </div>
  );
};

const ContentWrapper = ({ children, display }) => {
  return (
    <div
      style={{
        display
      }}
    >
      {children}
    </div>
  );
};

const Wrapper = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

const SkillIcon = ({ src, style, showSkills, delay }) => {
  return (
    <div style={{ position: "absolute", ...style }}>
      <Fade when={showSkills} bottom delay={delay}>
        <img src={src} className="skillImage" />
      </Fade>
    </div>
  );
};

const SmallImage = ({ showSmallImage }) => {
  return (
    <Fade when={showSmallImage} bottom>
      <div className="smallImageContainer">
        <span style={{ marginRight: 20 }}>Jonathan Johansson</span>
        <img src={profil} className="image small" />
      </div>
    </Fade>
  );
};

const SectionWrapper = ({ children }) => {
  return (
    <div style={{ width: "100%", display: "flex", height: 400, marginBottom:100, position:"relative", backgroundColor:"rgba(0,0,0,0.8)" }}>
      {children}
    </div>
  );
};

const SkillImageContainer = ({ showSkills }) => {
  return (
    <Fragment>

  
      <div className="skillsContent">
        <SkillIcon
          src={html}
          style={{ top: 100, left: "40%" }}
          showSkills={showSkills}
        />
        <SkillIcon
          src={css}
          style={{ top: 40, left: "60%" }}
          delay={50}
          showSkills={showSkills}
        />
        <SkillIcon
          src={es}
          style={{ top: 0, left: "30%" }}
          delay={100}
          showSkills={showSkills}
        />
        <SkillIcon
          src={graphql}
          style={{ top: 180, left: "55%" }}
          delay={150}
          showSkills={showSkills}
        />
        <SkillIcon
          src={prisma}
          style={{ top: 150, left: "0%" }}
          delay={200}
          showSkills={showSkills}
        />
        <SkillIcon
          src={firebase}
          style={{ top: 10, left: "10%" }}
          delay={250}
          showSkills={showSkills}
        />
        <SkillIcon
          src={react}
          style={{ top: 100, left: "20%" }}
          delay={300}
          showSkills={showSkills}
        />
        <SkillIcon
          src={github}
          style={{ top: 210, left: "21%" }}
          delay={350}
          showSkills={showSkills}
        />
        <SkillIcon
          src={mongodb}
          style={{ top: 260, left: "50%" }}
          delay={400}
          showSkills={showSkills}
        />
        <SkillIcon
          src={nodejs}
          style={{ top: 300, left: "5%" }}
          delay={450}
          showSkills={showSkills}
        />
        <SkillIcon
          src={vue}
          style={{ top: 300, left: "35%" }}
          delay={500}
          showSkills={showSkills}
        />
      </div>
      <Fade when={showSkills} bottom>
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            margin: 0,
            color:"rgba(255,255,255,0.8)"
          }}
        >
          <span className="skillHead">Technologies</span>
          <p className="test">
            These are the technologies that I know at the moment.{" "}
          </p>
          <p className="presstext">
            Press on each icon to find out more about them
          </p>
        </div>
      </Fade>
    </Fragment>
  );
};

class Cv extends Component {
  state = {
    displayOrNot: "none",
    showSmallImage: false,
    showSkills: false
  };

  componentDidMount() {
    window.addEventListener("scroll", e => {
      let scrollPos =
        window.scrollY ||
        window.scrollTop ||
        document.getElementsByTagName("html")[0].scrollTop;

      this.setState(state => ({
        showSmallImage: scrollPos > 400 ? true : false
      }));

      if (scrollPos > 300) {
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
    const { showSmallImage, showSkills } = this.state;
    return (
      <React.Fragment>
        <Transition {...transitionProps}>
          <Wrapper>
            <Header display={this.state.displayOrNot} />
            <ContentWrapper display={this.state.displayOrNot}>
              <SmallImage showSmallImage={showSmallImage} />
              <div className="content">
                <Letter />
                <SectionWrapper>
                <SkillImageContainer showSkills={showSkills} />

                </SectionWrapper>

                <Fade bottom>

                <SectionWrapper>
                    <div style={{width:"100%", margin:0}}>
                      <span className="projecttext">
                        Projects
                      </span>
                      <p>Check out the projects I've made.</p>
                        <p>You can also check out my github for more indepth investigation</p>
                      <div style={{backgroundColor:"rgba(0,0,0,0.8)", position:"relative", display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                          <span className="projects" >Nymbani Skateboards</span>
                          <span className="projects" >Album list</span>

                          <span className="projects" >Newsify</span>
                          <span className="projects">Calculator</span>
                          <span className="projects" >Pace</span>
                          <span className="projects" >Time for quiz</span>

                      </div>
                      {/* <div style={{backgroundColor:"white", height:100}}> 
                        <p>I've always loved skateboarding and other sports that inlucedes boards.</p>
                        <p>Me and my brother made our own company to make our own boards.</p>

                      </div> */}
                    
                    </div>
                </SectionWrapper>

                </Fade>

                <div />
              </div>
            </ContentWrapper>
          </Wrapper>
        
        </Transition>
      </React.Fragment>
    );
  }
}

export default Cv;
