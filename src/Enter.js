import React, { Component, Fragment } from "react";
import "./css/App.css";
import "./css/enterBtn.css";
import { CSSTransition } from "react-transition-group";

class Wrapper extends Component {
  render() {
    const { children, ruta, onEntered } = this.props;
    return (
      <Fragment>
        <CSSTransition
          in={ruta}
          timeout={200}
          classNames="ruta"
          onEntered={onEntered}
        >
          <div className="ruta" />
        </CSSTransition>

        {children}
        <CSSTransition in={ruta} timeout={200} classNames="rutaUnder">
          <div className="rutaUnder" />
        </CSSTransition>
      </Fragment>
    );
  }
}

const ImageButton = ({ showCv, onEntered, leaveFirstScreen }) => {
  return (
    <CSSTransition
      in={showCv=== false && true}
      appear={true}
      timeout={900}
      classNames="fade"
      onEntered={onEntered}
    >
      <div className="cartbtn" onClick={leaveFirstScreen}>
        <img src="./surf.svg" />
        <span>View cart</span>
      </div>
    </CSSTransition>
  );
};

const Underline = ({ textLine, onEntered }) => {
  return (
    <CSSTransition
      in={textLine}
      timeout={400}
      classNames="line"
      onEntered={onEntered}
    >
      <div id="line" />
    </CSSTransition>
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
