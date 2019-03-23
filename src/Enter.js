import React, { Component, Fragment } from "react";
import "./css/App.css";
import "./css/enterBtn.css";
import Transition from "./UI/Transition"
import { CSSTransition } from "react-transition-group";


class Wrapper extends Component {
  render() {
    const { children, ruta, onEntered } = this.props;
    const transitionProps = {start:ruta, timeout:200, classNames:"ruta", onEntered:onEntered}
    return (
      <Fragment>
        <Transition
         {...transitionProps}
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
  const transitionProps = {start:showCv === false && true, appear:true, timeout:900, classNames:"fade", onEntered:onEntered}
  return (
    <Transition
     {...transitionProps}
    >
      <div className="cartbtn" onClick={leaveFirstScreen}>
        <img src="./surf.svg" />
        <span>View cart</span>
      </div>
    </Transition>
  );
};

const Underline = ({ textLine, onEntered }) => {
  const transitionProps = {start:textLine, timeout:400, classNames:"line", onEntered:onEntered}
  return (
    <Transition
     {...transitionProps}
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

    const wrapperProps = {ruta:ruta, onEntered:() => {
      this.setState({
        rutaUnder: true
      });
    }}
    const imageButtonProps = {showCv:showCv, leaveFirstScreen:this.leaveFirstScreen, onEntered:()=>{
      this.setState({
        textLine: true
      });
    }}

    const underLineProps = {textLine:textLine, onEntered:() => {
      this.setState({
        ruta: true
      });
    }}
    return (
      <Wrapper
        {...wrapperProps}
      >
        <div className="startBtn">
          <ImageButton
            {...imageButtonProps}
          />

          <Underline
            {...underLineProps}
          />
        </div>
      </Wrapper>
    );
  }
}

export default Enter;
