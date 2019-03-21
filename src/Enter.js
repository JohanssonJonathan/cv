import React, { Component, Fragment } from "react";
import "./css/App.css";
import "./css/enterBtn.css";
import Transition from "./UI/Transition"
import { CSSTransition } from "react-transition-group";


class Wrapper extends Component {
  render() {
    const { children, ruta, onEntered } = this.props;
    return (
      <Fragment>
        <Transition
          start={ruta}
          timeout={200}
          classNames="ruta"
          onEntered={onEntered}
        >
          <div className="ruta" />
        </Transition>

        {children}
        <Transition start={ruta} timeout={200} classNames="rutaUnder">
          <div className="rutaUnder" />
        </Transition>
      </Fragment>
    );
  }
}

const ImageButton = ({ showCv, onEntered, leaveFirstScreen }) => {
  return (
    <Transition
      start={showCv === false && true}
      appear={true}
      timeout={900}
      classNames="fade"
      onEntered={onEntered}
    >
      <div className="cartbtn" onClick={leaveFirstScreen}>
        <img src="./surf.svg" />
        <span>View cart</span>
      </div>
    </Transition>
  );
};

const Underline = ({ textLine, onEntered }) => {
  return (
    <Transition
      start={textLine}
      timeout={400}
      classNames="line"
      onEntered={onEntered}
    >
      <div id="line" />
    </Transition>
  );
};

class Enter extends Component {
  state = {
    textLine: false,
    ruta: false,
    rutaUnder: false
  };

  leaveFirstScreen = () => {
    this.setState({
      textLine: false,
      ruta: false,
      rutaUnder: false
    });

    this.props.toggleCvModal();
  };

  render() {
    const { ruta, textLine } = this.state;
    const { showCv } = this.props;
    return (
      <Wrapper
        ruta={ruta}
        onEntered={() => {
          this.setState({
            rutaUnder: true
          });
        }}
      >
        <div className="startBtn">
          <ImageButton
            showCv={showCv}
            onEntered={() => {
              this.setState({
                textLine: true
              });
            }}
            leaveFirstScreen={this.leaveFirstScreen}
          />

          <Underline
            textLine={textLine}
            onEntered={() => {
              this.setState({
                ruta: true
              });
            }}
          />
        </div>
      </Wrapper>
    );
  }
}

export default Enter;
