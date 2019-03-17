import React, { Component } from "react";
import "./css/App.css";
import "./css/enter.css";
import { CSSTransition } from "react-transition-group";
import Bottom from "./Bottom.js";
import Transition from "./UI/Transition";

import profil from "./images/profil.png";

class Cv extends Component {
  state = {
    displayOrNot: "none",
    profileMoveRight: false,
   
  };

  componentDidMount() {
    window.addEventListener("scroll", e => {
      let scrollPos =
        window.scrollY ||
        window.scrollTop ||
        document.getElementsByTagName("html")[0].scrollTop;

      if (scrollPos >1) {
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
          <div className="cart">
            <div style={{ display: this.state.displayOrNot }}>
              <div>
                <span className="name">Jonathan Johansson</span>
                <div className="border" />
              </div>
              <div className="hej">
                <div className="profileContainer">
                  <Transition
                  start={this.state.profileMoveRight}
                  timeout={100}
                  classNames="animateProfile"

                  >
                    <div className="profileFixed">
                      <div className="profil" />
                      <img src={profil} className="profileImage" />
                    </div>
                  </Transition>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </React.Fragment>
    );
  }
}

export default Cv;
