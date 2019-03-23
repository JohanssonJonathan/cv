import React from "react";
import { CSSTransition } from "react-transition-group";
import "../css/cv.css"

const Transition = ({ children, start, timeout, classNames, onEntered, appear }) => {

  return (
    <CSSTransition
      in={start}
      appear={appear}
      timeout={timeout}
      classNames={classNames}
      onEntered={onEntered}
    >
      {children}
    </CSSTransition>
  );
};

export default Transition