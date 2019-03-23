import React, { Component, Fragment } from "react";
import "./css/App.css";
import "./css/cv.css";
import Transition from "./UI/Transition";
import Fade from "react-reveal/Fade";
import profil from "./images/profil.png";
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

const localStyles = {
  progressbar: {
    width: "100%",
    position: "absolute",
    top: 20
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
    marginTop: 100,
    display: "flex",
    justifyContent: "center"
  },
  letter: { textAlign: "center", width: "50%" }
};

const ProgressBar = ({ style, id }) => {
  return (
    <div className="meter">
      <span id={id} style={style} />
    </div>
  );
};

const ProgressBars = ({ style }) => {
  return (
    <div style={{ ...style }}>
      <ProgressBar id="progressbar1" style={{ width: "40%" }} />
      <ProgressBar id="progressbar2" style={{ width: "27%" }} />
      <ProgressBar id="progressbar3" style={{ width: "35%" }} />
      <ProgressBar id="progressbar4" style={{ width: "33%" }} />
      <ProgressBar id="progressbar5" style={{ width: "40%" }} />
      <ProgressBar id="progressbar6" style={{ width: "33%" }} />
      <ProgressBar id="progressbar7" style={{ width: "50%" }} />
      <ProgressBar id="progressbar8" style={{ width: "30%" }} />
    </div>
  );
};

const Name = () => {
  return (
    <div>
      <span className="name">Jonathan Johansson</span>
      <div className="underline" />
    </div>
  );
};

const Image = () => {
  return (
    <div className="profileFixed">
      <img src={profil} className="image" />
    </div>
  );
};

const ImageWrapper = ({ children }) => {
  return (
    <div className="imageWrapper">
      <div className="profile">{children}</div>
    </div>
  );
};

const Letter = () => {
  return (
    <Fade>
      <div style={localStyles.letterContainer}>
        <p style={localStyles.letter}>
          Glad och social frontend-utvecklarstudent på 25 år med ett stort
          intresse för IT och att bygga webbapplikationer. I grund och botten en
          väldigt världsvan person som har lätt för att kontakt med folk och
          lära känna nya människor. Även folk från andra kulturer. Har lätt för
          skratt och gillar att skämta till det. Även väldigt seriös och
          allvarlig när det väl gäller. Kombinationen av kod och design är något
          som jag tycker är väldigt kul. Jag skulle anse mig själv som en person
          med hög arbetsmoral som alltid strävar efter att göra rätt för sig som
          samt aldrig hittar luckor för att ta det lugnt. Jag inte bara tror
          utan jag vet också att jag har möjligheter att kunna utveckla mig
          själv och erat företag till det bättre. Både i team, design och kod!
        </p>
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

const Skills = () => {
  return (
    <div style={localStyles.skillsContainer}>
      <div style={{ position: "relative" }}>
        <Skill style={localStyles.htmlSkill}>html</Skill>
        <Skill style={localStyles.cssSkill}>css</Skill>
        <Skill style={localStyles.javascripSkill}>javascript</Skill>
        <Skill style={localStyles.nodeSkill}>node</Skill>
        <Skill style={localStyles.apolloSkill}>apollo</Skill>
        <Skill style={localStyles.graphqlSkill}>graphql</Skill>
        <Skill style={localStyles.reactSkill}>react</Skill>
        <Skill style={localStyles.nativeSkill}>native</Skill>
        <Skill style={localStyles.vueSkill}>vue</Skill>
        <Skill style={localStyles.githubSkill}>github</Skill>
        <Skill style={localStyles.prismaSkill}>prisma</Skill>
        <Skill style={localStyles.jsonSkill}>json</Skill>
        <Skill style={localStyles.ajaxSkill}>ajax</Skill>
        <Skill style={localStyles.mongodbSkill}>mongodb</Skill>
        <Skill style={localStyles.firebaseSkill}>firebase</Skill>
      </div>
    </div>
  );
};

const Header = ({ display }) => {
  return (
    <div style={{ display }}>
      <Name />
      <ImageWrapper>
        <Image />
      </ImageWrapper>
    </div>
  );
};

const ContentWrapper = ({ children, display }) => {
  return (
    <div
      style={{
        display,
        ...localStyles.progressbar
      }}
    >
      {children}
    </div>
  );
};

const UpperContent = () => {
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <Skills />
      <ProgressBars style={localStyles.flip} />
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

const SkillImageContainer = ({showSkills}) => {
  return (
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
        showSmallImage: scrollPos > 260 ? true : false
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
              <UpperContent />
              <div className="content">
                <Letter />
                <SkillImageContainer showSkills={showSkills}/>
              </div>
            </ContentWrapper>
          </Wrapper>
        </Transition>
      </React.Fragment>
    );
  }
}

export default Cv;
