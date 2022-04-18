import Nav from "./components/layout/Nav";
import { Icon } from "semantic-ui-react";
import { BsBootstrap } from "react-icons/bs";
import { SiNextdotjs } from "react-icons/si";

export default function Home() {
  return (
    <div className="main">
      <Nav />
      <div className="mainContent">
        <img src="/favicon.ico" />
        <div className="aboutHome">
          <h1 className="homeName">DYLAN THOMAS</h1>
          <h2 className="homePosition">Web Developer</h2>
          <p className="homeDescription">
            Since a kid i've had a nack for technology. This niche interest has drove me toward programming, and Web Development.
          </p>
          <a href="/skills" className="a">
            <div className="quickSkills">
              <div className="quickSkill HTML">
                <Icon name="html5" size="massive" aria-hidden="false" />
                <h2>HTML</h2>
              </div>
              <div className="quickSkill JS">
                <Icon name="js" size="massive" aria-hidden="false" />
                <h2>JS/JQUERY</h2>
              </div>
              <div className="quickSkill NODE">
                <Icon name="node js" size="massive" aria-hidden="false" />
                <h2>NODE.JS</h2>
              </div>
              <div className="quickSkill BS">
                <BsBootstrap className="bs" />
                <h2>BOOTSTRAP</h2>
              </div>
              <div className="quickSkill CSS">
                <Icon name="css3 alternate" size="massive" aria-hidden="false" />
                <h2>CSS</h2>
              </div>
              <div className="quickSkill SCSS">
                <Icon name="sass" size="massive" aria-hidden="false" />
                <h2>SASS</h2>
              </div>
              <div className="quickSkill React">
                <Icon
                  name="react"
                  background="black"
                  size="massive"
                  aria-hidden="false"
                />
                <h2>REACT</h2>
              </div>
              <div className="quickSkill Next">
                <SiNextdotjs className="next"/>
                <h2>NEXT</h2>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
