import React from "react";
import Nav from "./components/layout/Nav";
import { Icon } from "semantic-ui-react";
import { BsBootstrap } from "react-icons/bs";
import { SiNextdotjs } from "react-icons/si";

const skills = () => {
  return (
    <div className="exprMain">
      <Nav />
      <h1 className="skillsName">Dylan Thomas</h1>
      <div className="skillsMain">
        <div className="skills">
            <div className="skills">
              <div className="skill HTML">
                <Icon name="html5" size="massive" aria-hidden="false" />
                <h2>HTML</h2>
              </div>
              <div className="skill JS">
                <Icon name="js" size="massive" aria-hidden="false" />
                <h2>JS/JQUERY</h2>
              </div>
              <div className="skill NODE">
                <Icon name="node js" size="massive" aria-hidden="false" />
                <h2>NODE.JS</h2>
              </div>
              <div className="skill BS">
                <BsBootstrap className="bs" />
                <h2>BOOTSTRAP</h2>
              </div>
              <div className="skill CSS">
                <Icon
                  name="css3 alternate"
                  size="massive"
                  aria-hidden="false"
                />
                <h2>CSS</h2>
              </div>
              <div className="skill SCSS">
                <Icon name="sass" size="massive" aria-hidden="false" />
                <h2>SASS</h2>
              </div>
              <div className="skill React">
                <Icon
                  name="react"
                  background="black"
                  size="massive"
                  aria-hidden="false"
                />
                <h2>REACT</h2>
              </div>
              <div className="skill Next">
                <SiNextdotjs className="next" />
                <h2>NEXT</h2>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default skills;
