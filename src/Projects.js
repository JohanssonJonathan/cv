import React, {Component} from "react";
import "./css/App.css";
import "./css/cv.css";
import Fade from "react-reveal/Fade";

const localStyles = {
  sectionWrapper: {
    width: "100%",
    display: "flex",
    marginTop: 400,
    position: "relative"
  },
  projectsContainer:{
    marginTop: 30,
    position: "relative",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap"
  },
  
  projectName: {
    backgroundColor: "rgba(0,0,0,0.8)",
    color: "rgba(255,255,255,0.8)",
    margin:0,
    padding:5,
    borderRadius:"5px 5px 0 0"
  },
  ulList:{
    listStyle: "none",
    padding:"0",
    fontSize:11,
    textAlign: "left",
    paddingLeft:10
  
  },
  link:{
    color:"gray"
  }
};

class Project extends Component{

  state={
    hover:false
  }

  render(){
    const { name, children, technologies, src }= this.props
    const openLinkInNewTab = url => {
        const win = window.open(url, "_blank");
        win.focus();
      };
      const {hover}= this.state;
  return (
    <div style={{ width: 200, cursor:"pointer" }} className="project">
      <h4
        style={{backgroundColor:hover&&"rgba(0,0,0,0.6)"}}
        className="projectName"
        onClick={()=>openLinkInNewTab(src)}
        onMouseEnter={() => this.setState({hover: true})}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        {name}
      </h4>
      <p className="projectTextInfo">{children}</p>
      <ul style={localStyles.ulList}>
        {technologies.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );

  }
};

const ProjectsInfo = () => {
  return (
    <React.Fragment>
      <span className="projectHeader">Projects</span>
      <p>
        You can also check out my {" "}
        <a style={localStyles.link} id="github" href="https://github.com/JohanssonJonathan">github</a> for more
        projects
      </p>
    </React.Fragment>
  );
};

const Projects = () => {
  return (
    <div
      style={localStyles.projectsContainer}
    >
      <Project src={"https://johanssonjonathan.github.io/Nyumbani/"} name="Nyumbani"  technologies={["HTML5", "CSS3", "ES 6"]}>
        Me and my brothers skateboard brand
      </Project>
      <Project
        name="Quiz"
        src={"https://johanssonjonathan.github.io/reactquiz/"}
        technologies={["HTML5", "CSS3", "ES 6", "MongoDB", "React"]}
      >
        A quiz with different categories. Can you get to the top of the
        highscore?
      </Project>
      <Project
        name="Music albums"
        src={"https://johanssonjonathan.github.io/labVue/"}
        technologies={["HTML5", "CSS3", "ES 6, Vue"]}
      >
        Add, edit or delete your own music list.
      </Project>
      <Project
        name="Share music"
        src={"https://gentle-mountain-81147.herokuapp.com/"}
        technologies={["HTML5", "CSS3", "ES6", "React", "MongoDB"]}
      >
        Login in and share your favorite music
      </Project>
      <Project src={"https://alex1604.github.io/Newsify/"} name="News" technologies={["HTML5", "CSS3", "ES 6", "Firebase"]}>
        Search for specific news through an API
      </Project>
      <Project 
      src={"https://www.getpace.app/"}
        name="Pace"
        technologies={[
          "HTML5",
          "CSS3",
          "ES6",
          "Graphql",
          "Prisma",
          "React-native-web"
        ]}
      >
        A project I made at Hyperlab during my internship. 
      </Project>
    </div>
  );
};

const ProjectsContainer = () => {
  return (
    <Fade bottom>
      <div style={localStyles.sectionWrapper}>
        <div style={{ width: "100%", margin: 0 }}>
          <ProjectsInfo />
          <Projects />
        </div>
      </div>
    </Fade>
  );
};

export default ProjectsContainer;
