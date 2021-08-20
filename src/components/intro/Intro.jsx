import './intro.scss'
import { FaChevronDown } from 'react-icons/fa';

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/queso.png" alt="Mmmmm rico"/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Francisco Dumont</h1>
          <h3>Freelance</h3>
        </div>

        <h1>
          <a href="#portfolio">
            <FaChevronDown/>
          </a>
        </h1>
      </div>


    </div>
  )
};
