import './topbar.scss'
import { FaEnvelope, FaUser } from 'react-icons/fa';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Francisco Dumont</a>
          {/*
          <div className="itemContainer">
            <FaUser className="icon"/>
            <span>hola</span>
          </div>
          <div className="itemContainer">
            <FaEnvelope className="icon"/>
            <span>+54 11 6416 2160</span>
          </div>
        */}
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => {
            setMenuOpen(!menuOpen)
          }}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
};
