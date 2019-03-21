import React, { Component, Fragment } from "react";
import "./css/App.css";
import "./css/cv.css";
import { CSSTransition } from "react-transition-group";
import Transition from "./UI/Transition";

import profil from "./images/profil.png";

const localStyles = {
  progressbar: {
    width: "100%",
    height: 200,
    position: "absolute",
    top: 20,
    left: 0,
    right: 0
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
    marginTop: 80,
    display: "flex",
    justifyContent: "center"
  },
  letter: { textAlign: "center", width: "50%" }
};

const ProgressBars = ({ style }) => {
  return (
    <div style={{ ...style }}>
      <div class="meter">
        <span id="progressbar1" style={{ width: "40%" }} />
      </div>
      <div class="meter">
        <span id="progressbar2" style={{ width: "27%" }} />
      </div>
      <div class="meter">
        <span id="progressbar3" style={{ width: "35%" }} />
      </div>
      <div class="meter">
        <span id="progressbar4" style={{ width: "33%" }} />
      </div>
      <div class="meter">
        <span id="progressbar5" style={{ width: "40%" }} />
      </div>
      <div class="meter">
        <span id="progressbar6" style={{ width: "33%" }} />
      </div>
      <div class="meter">
        <span id="progressbar7" style={{ width: "50%" }} />
      </div>
      <div class="meter">
        <span id="progressbar8" style={{ width: "30%" }} />
      </div>
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

const Image = ({ profileMoveRight }) => {
  return (
    <Transition
      start={profileMoveRight}
      timeout={100}
      classNames="animateProfile"
    >
      <div className="profileFixed">
        <Transition
          start={profileMoveRight}
          timeout={100}
          classNames="animateImage"
        >
          <img src={profil} className="image" />
        </Transition>
      </div>
    </Transition>
  );
};

const ImageWrapper = ({ children, profileMoveRight }) => {
  return (
    <div className="imageWrapper">
      <Transition
        start={profileMoveRight}
        timeout={100}
        classNames="animateTop"
      >
        <div className="profile">{children}</div>
      </Transition>
    </div>
  );
};

const Letter = () => {
  return (
    <div style={localStyles.letterContainer}>
      <p style={localStyles.letter}>
        Glad och social frontend-utvecklarstudent på 25 år med ett stort
        intresse för IT och att bygga webbapplikationer. I grund och botten en
        väldigt världsvan person som har lätt för att kontakt med folk och lära
        känna nya människor. Även folk från andra kulturer. Har lätt för skratt
        och gillar att skämta till det. Även väldigt seriös och allvarlig när
        det väl gäller. Kombinationen av kod och design är något som jag tycker
        är väldigt kul. Jag skulle anse mig själv som en person med hög
        arbetsmoral som alltid strävar efter att göra rätt för sig som samt
        aldrig hittar luckor för att ta det lugnt. Jag inte bara tror utan jag
        vet också att jag har möjligheter att kunna utveckla mig själv och erat
        företag till det bättre. Både i team, design och kod!
      </p>
    </div>
  );
};

const Skills = () => {
  return (
    <div style={localStyles.skillsContainer}>
      <div style={{ position: "relative" }}>
        <span className="skill" style={localStyles.htmlSkill}>
          html
        </span>
        <span className="skill" style={localStyles.cssSkill}>
          css
        </span>
        <span className="skill" style={localStyles.javascripSkill}>
          javascript
        </span>
        <span className="skill" style={localStyles.nodeSkill}>
          node
        </span>
        <span className="skill" style={localStyles.apolloSkill}>
          apollo
        </span>
        <span className="skill" style={localStyles.graphqlSkill}>
          graphql
        </span>
        <span className="skill" style={localStyles.reactSkill}>
          react
        </span>
        <span className="skill" style={localStyles.nativeSkill}>
          native
        </span>
        <span className="skill" style={localStyles.vueSkill}>
          vue
        </span>
        <span className="skill" style={localStyles.githubSkill}>
          github
        </span>
        <span className="skill" style={localStyles.prismaSkill}>
          prisma
        </span>
        <span className="skill" style={localStyles.jsonSkill}>
          json
        </span>
        <span className="skill" style={localStyles.ajaxSkill}>
          ajax
        </span>
        <span className="skill" style={localStyles.mongodbSkill}>
          mongodb
        </span>
        <span className="skill" style={localStyles.firebaseSkill}>
          firebase
        </span>
      </div>
    </div>
  );
};

class Cv extends Component {
  state = {
    displayOrNot: "none",
    profileMoveRight: false
  };

  componentDidMount() {
    window.addEventListener("scroll", e => {
      let scrollPos =
        window.scrollY ||
        window.scrollTop ||
        document.getElementsByTagName("html")[0].scrollTop;

      if (scrollPos > 1) {
        this.setState(state => ({
          profileMoveRight: true
        }));
      } else if (scrollPos < 50) {
        this.setState(state => ({
          profileMoveRight: false
        }));
      }
    });
  }

  render() {
    const { showCv } = this.props;
    const { profileMoveRight } = this.state;
    return (
      <React.Fragment>
        <Transition
          start={showCv}
          timeout={200}
          classNames="showCv"
          onEntered={() => {
            this.setState({
              displayOrNot: "block"
            });
          }}
        >
          <div className="wrapper">
            <div style={{ display: this.state.displayOrNot }}>
              <Name />
              <ImageWrapper profileMoveRight={profileMoveRight}>
                <Image profileMoveRight={profileMoveRight} />
              </ImageWrapper>
            </div>

            <div
              style={{
                display: this.state.displayOrNot,
                ...localStyles.progressbar
              }}
            >
              <div style={{ position: "relative", width: "100%" }}>
                <Skills />
                <ProgressBars style={localStyles.flip} />
              </div>
              <Letter />
            </div>
          </div>
        </Transition>
      </React.Fragment>
    );
  }
}

export default Cv;
