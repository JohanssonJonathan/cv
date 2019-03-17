import React from "react";
import { CSSTransition } from "react-transition-group";

const Transition = ({ children, start, timeout, classNames, onEntered }) => {
  return (
    <CSSTransition
      in={start}
      timeout={timeout}
      classNames={classNames}
      onEntered={onEntered}
    >
      {children}
    </CSSTransition>
  );
};

export default Transition