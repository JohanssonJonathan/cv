import React from "react";
import { CSSTransition } from "react-transition-group";
import "../css/cv.css"

const Transition = ({ children, start, timeout, classNames, onEntered, appear }) => {
  console.log("this is profileMoveRight: ", start)
  console.log(classNames)
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