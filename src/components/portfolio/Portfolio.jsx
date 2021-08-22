import './portfolio.scss'
import PortfolioList from '../portfolioList/PortfolioList'
import { useState } from 'react';

export default function Portfolio() {

  const [selected, setSelected] = useState('featured');

  const list = [
    { id: 'featured', title: 'Featured' },
    { id: 'web ', title: 'Web App' },
    { id: 'mobile ', title: 'Mobile App' },
    { id: 'design', title: 'Design' },
    { id: 'content ', title: 'Content' },
  ]
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => {
          return <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        })}
      </ul>
      <div className="container">
        <div className="item">
          <img src="https://www.vhv.rs/dpng/d/6-67078_imagen-de-un-chimpanc-hd-png-download.png"
               alt=""/>
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://www.vhv.rs/dpng/d/6-67078_imagen-de-un-chimpanc-hd-png-download.png"
               alt=""/>
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://www.vhv.rs/dpng/d/6-67078_imagen-de-un-chimpanc-hd-png-download.png"
               alt=""/>
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://www.vhv.rs/dpng/d/6-67078_imagen-de-un-chimpanc-hd-png-download.png"
               alt=""/>
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://www.vhv.rs/dpng/d/6-67078_imagen-de-un-chimpanc-hd-png-download.png"
               alt=""/>
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://www.vhv.rs/dpng/d/6-67078_imagen-de-un-chimpanc-hd-png-download.png"
               alt=""/>
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://www.vhv.rs/dpng/d/6-67078_imagen-de-un-chimpanc-hd-png-download.png"
               alt=""/>
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  )
};
