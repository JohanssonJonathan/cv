import React, { Component } from "react";
import "./css/App.css";
import "./css/cv.css";
import Fade from "react-reveal/Fade";
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
  skillsWrapper: {
    display: "flex",
    flexDirection: "column",
    position: "relative"
  },
  skillsContainer: {
    display: "flex",
    position: "relative",
    backgroundColor: "rgba(0,0,0,0.8)",
    padding: 30
  },
  skillInfoContainer: {
    alignSelf: "flex-end",
    width: "50%",
    display: "flex",
    justifyContent: "flex-start",
    top: 250,
    position: "absolute"
  },
  technologiesTextContainer: {
    width: "55%",
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    margin: 0,
    color: "rgba(255,255,255,0.8)"
  },
  specificSkillText: {
    width: "80%",
    display: "flex",
    flexDirection: "column"
  }
};

const SkillsContainer = ({ showSkills, onClick, resetSkills }) => {
  return (
    <div className="skillsContent">
      <SkillIcon
        src={html}
        style={{ top: 100, right: "40%" }}
        showSkills={showSkills}
        onClick={() => onClick("html")}
        resetSkills={resetSkills}
      />
      <SkillIcon
        src={css}
        style={{ top: 40, right: "60%" }}
        delay={50}
        showSkills={showSkills}
        onClick={() => onClick("css")}
        resetSkills={resetSkills}
      />
      <SkillIcon
        src={es}
        style={{ top: 0, right: "30%" }}
        delay={100}
        showSkills={showSkills}
        onClick={() => onClick("js")}
        resetSkills={resetSkills}
      />
      <SkillIcon
        src={graphql}
        style={{ top: 180, right: "55%" }}
        delay={150}
        showSkills={showSkills}
        onClick={() => onClick("graphql")}
        resetSkills={resetSkills}
      />
      <SkillIcon
        src={prisma}
        style={{ top: 150, right: "0%" }}
        delay={200}
        showSkills={showSkills}
        onClick={() => onClick("prisma")}
        resetSkills={resetSkills}
      />
      <SkillIcon
        src={firebase}
        style={{ top: 10, right: "10%" }}
        delay={250}
        showSkills={showSkills}
        onClick={() => onClick("firebase")}
        resetSkills={resetSkills}
      />
      <SkillIcon
        src={react}
        style={{ top: 100, right: "20%" }}
        delay={300}
        showSkills={showSkills}
        onClick={() => onClick("react")}
        resetSkills={resetSkills}
      />
      <SkillIcon
        src={github}
        style={{ top: 210, right: "21%" }}
        delay={350}
        showSkills={showSkills}
        onClick={() => onClick("github")}
        resetSkills={resetSkills}
      />
      <SkillIcon
        src={mongodb}
        style={{ top: 260, right: "50%" }}
        delay={400}
        showSkills={showSkills}
        onClick={() => onClick("mongodb")}
        resetSkills={resetSkills}
      />
      <SkillIcon
        src={nodejs}
        style={{ top: 300, right: "5%" }}
        delay={450}
        showSkills={showSkills}
        onClick={() => onClick("nodejs")}
        resetSkills={resetSkills}
      />
      <SkillIcon
        src={vue}
        style={{ top: 300, right: "35%" }}
        delay={500}
        showSkills={showSkills}
        onClick={() => onClick("vue")}
        resetSkills={resetSkills}
      />
    </div>
  );
};

const TechnologiesText = ({ showSkills }) => {
  return (
    <Fade when={showSkills} bottom>
      <div style={localStyles.technologiesTextContainer}>
        <span className="skillHead">Technologies</span>
        <p style={{ marginTop: 20 }}>
          These are the technologies that I know at the moment.
        </p>
        <p
          style={{
            marginTop: 0,
            fontSize: 12
          }}
        >
          Hover on each icon to find out more about them
        </p>
      </div>
    </Fade>
  );
};

const ShowCurrentSkill = ({ currentSkill }) => {
  switch (currentSkill) {
    case "html":
      // code block
      return (
        <div style={localStyles.specificSkillText}>
          Hypertext Markup Language (HTML) is the standard markup language for
          creating web pages and web applications. With Cascading Style Sheets
          (CSS) and JavaScript, it forms a triad of cornerstone technologies for
          the World Wide Web
        </div>
      );
      break;
    case "css":
      // code block
      return (
        <div style={localStyles.specificSkillText}>
          Cascading Style Sheets (CSS) is a style sheet language used for
          describing the presentation of a document written in a markup language
          like HTML. CSS is designed to enable the separation of presentation
          and content, including layout, colors, and fonts.
        </div>
      );
      break;
    case "js":
      // code block
      return (
        <div style={localStyles.specificSkillText}>
          JavaScript often abbreviated as JS, is a high-level, interpreted
          programming language that conforms to the ECMAScript specification.
          Alongside HTML and CSS, JavaScript is one of the core technologies of
          the World Wide Web. JavaScript enables interactive web pages and is an
          essential part of web applications. The vast majority of websites use
          it, and major web browsers have a dedicated JavaScript engine to
          execute it.
        </div>
      );
      break;
    case "graphql":
      // code block
      return (
        <div style={localStyles.specificSkillText}>
          GraphQL is a query language for your API, and a server-side runtime
          for executing queries by using a type system you define for your data.
          GraphQL isn't tied to any specific database or storage engine and is
          instead backed by your existing code and data.
        </div>
      );
      break;
    case "prisma":
      // code block
      return (
        <div style={localStyles.specificSkillText}>
          Prisma client simplifies database access. It lets you read and write
          data to your database using your favorite programming language.
        </div>
      );
      break;
    case "firebase":
      // code block
      return (
        <div style={localStyles.specificSkillText}>
          Firebase can power your app's backend, including data storage, user
          authentication, static hosting, and more. ... Build cross-platform
          native mobile and web apps with our Android, iOS, and JavaScript SDKs.
          You can also connect Firebase to your existing backend using our
          server-side libraries or our REST API.
        </div>
      );
      break;
    case "mongodb":
      // code block
      return (
        <div style={localStyles.specificSkillText}>
          MongoDB is a cross-platform document-oriented database program.
          Classified as a NoSQL database program, MongoDB uses JSON-like
          documents with schemata.
        </div>
      );
      break;
    case "github":
      // code block
      return (
        <div style={localStyles.specificSkillText}>
          GitHub is a web-based hosting service for version control using Git.
          It is mostly used for computer code. It offers all of the distributed
          version control and source code management (SCM) functionality of Git
          as well as adding its own features.
        </div>
      );
      break;
    case "react":
      // code block
      return (
        <div style={localStyles.specificSkillText}>
          React is a library for building composable user interfaces. ... React
          can also render on the server using Node, and it can power native apps
          using React Native. React implements one-way reactive data flow, which
          reduces the boilerplate and is easier to reason about than traditional
          data binding.
        </div>
      );
      break;
    case "vue":
      // code block
      return (
        <div style={localStyles.specificSkillText}>
          Vue.js is a progressive, incrementally-adoptable JavaScript framework
          for building UI on the web
        </div>
      );
      break;
    case "nodejs":
      // code block
      return (
        <div style={localStyles.specificSkillText}>
          Node.js is an open-source, cross-platform JavaScript run-time
          environment that executes JavaScript code outside of a browser.{" "}
        </div>
      );
      break;
    default:
      return null;
    // code block
  }
};

class SkillIcon extends Component {
  state = {
    animate: false
  };
  render() {
    const { src, style, showSkills, delay, onClick, resetSkills } = this.props;
    const { animate } = this.state;

    return (
      <div
        className="iconContainer"
        style={{
          position: "absolute",
          ...style,
          transform: animate && "rotate(10deg)",
          filter: animate && "grayscale(70%)",
          cursor:"pointer"
        }}
        onMouseLeave={() => {
          resetSkills();
          this.setState({ animate: false });
        }}
        onMouseEnter={() => {
          this.setState({
            animate: true
          });

          onClick();
        }}
        onClick={onClick}
      >
        <Fade when={showSkills} bottom delay={delay}>
          <img src={src} className="skillImage" />
        </Fade>
      </div>
    );
  }
}

const Skills = ({ showSkills, onClick, currentSkill, resetSkills }) => {
  return (
    <div style={localStyles.skillsWrapper}>
      <div style={localStyles.skillsContainer}>
        <SkillsContainer
          showSkills={showSkills}
          onClick={onClick}
          resetSkills={resetSkills}
        />
        <TechnologiesText showSkills={showSkills} />
      </div>
      <div style={localStyles.skillInfoContainer}>
        <ShowCurrentSkill currentSkill={currentSkill} />
      </div>
    </div>
  );
};

export default Skills;
