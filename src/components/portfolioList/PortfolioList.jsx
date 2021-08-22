import './portfolioList.scss'

export default function Portfolio({id, title, active, setSelected}) {
  return (
    <li className={`portfolioList ${active ? 'active' : ''}`}
    onClick={() => setSelected(id)}>
      {title}
    </li>
  )
};
