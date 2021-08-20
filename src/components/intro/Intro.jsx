import './intro.scss'
import { FaChevronDown } from 'react-icons/fa';
import { init } from 'ityped'
import { useEffect, useRef } from 'react';

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    console.log(textRef)
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      strings: ['Queso', 'Mantequilla de Maní', 'Jalea', 'Doble Cola' ]
    })

  }, [])
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
          <h3>I like <span ref={textRef}></span></h3>
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
