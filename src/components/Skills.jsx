import "./Skills.css";
import { GrTechnology } from "react-icons/gr";
import search from "../assets/gifc.gif"

const Skills = () => {
  return (
    <div id="skills">
      <div className="skills_main">
        <div className="skills_intro">
          <h4>Hello and Welcome!</h4>
          <h1>A CS Undergrad here!👋</h1>
          <br />
          <br />
          <h4>(But you can also call me)</h4>
          <br />
          <h3>
            Your Friendly Neighbourhood Procastinator 👩‍💻 from <span>Bangalore, India.</span>
          </h3>
          <img src={search} width="40%"alt="gif-not-found"/>
        </div>
        <div className="skills_msg">
          <h3 style={{textAlign:"center"}}>Here are few Technologies i'm familiar with</h3>
          <div className="focus_skill">
            <div className="focus_skill1">
              <ul>
                <li>{<GrTechnology />} HTML</li>
                <li>{<GrTechnology />} CSS</li>
                <li>{<GrTechnology />} JavaScript</li>
                <li>{<GrTechnology />} ReactJs</li>
                <li>{<GrTechnology />} HTML</li>
                <li>{<GrTechnology />} C++</li>
                <li>{<GrTechnology />} Java</li>
                <li>{<GrTechnology />} Python</li>
                <li>{<GrTechnology />} MySQL</li>
                <li>{<GrTechnology />} jQuery</li>
              </ul>
            </div>
            <div className="focus_skill2">
              <ul>
                <li>{<GrTechnology />} Figma</li>
                <li>{<GrTechnology />} ClickUp</li>
                <li>{<GrTechnology />} Firebase</li>
                <li>{<GrTechnology />} TailwindCSS</li>
                <li>{<GrTechnology />} GSAP</li>
                <li>{<GrTechnology />} NodeJs</li>
                <li>{<GrTechnology />} ExpressJs</li>
                <li>{<GrTechnology />} ThreeJs</li>
                <li>{<GrTechnology />} Git </li>
                <li>{<GrTechnology />} GitHub</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
