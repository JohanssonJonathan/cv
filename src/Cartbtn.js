import React, { Component, Fragment } from "react";
import "./css/App.css";
import "./css/cartbtn.css";
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

const ImageButton = ({ showBtn, onEntered, leaveCartBtnComponent }) => {
  return (
    <CSSTransition
      in={showBtn}
      appear={true}
      timeout={900}
      classNames="fade"
      onEntered={onEntered}
    >
      <div className="cartbtn" onClick={leaveCartBtnComponent}>
        <img src="./surf.svg" />
        <span>View cart</span>
      </div>
    </CSSTransition>
  );
};

const Underline = ({textLine,onEntered}) => {
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

class Cartbtn extends Component {
  state = {
    textLine: false,
    ruta: false,
    rutaUnder: false
  };

  leaveCartBtnComponent = () => {
    this.setState({
      textLine: false,
      ruta: false,
      rutaUnder: false
    });

    function isEmpty(obj) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) return true;
      }
      return false;
    }

    if (isEmpty(this.props)) {
      this.props.cartBtnClicked();
    }
  };

  render() {
    const { ruta, textLine } = this.state;
    const { showBtn } = this.props;
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
            showBtn={showBtn}
            onEntered={() => {
              this.setState({
                textLine: true
              });
            }}
            leaveCartBtnComponent={this.leaveCartBtnComponent}
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

export default Cartbtn;
