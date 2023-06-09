import React from 'react'
import './Navbar.css'
import { useState } from 'react'
import { Link } from "react-router-dom";
import { useGlobalContext } from './context';
const Navbar = () => {
  const [mode, setmode] = useState('false');
  const [Name, setName] = useState('upperl');
  const [show, setShow] = useState('false');
  const [selectedOption, setSelectedOption] = useState('');
  const { setQuery } = useGlobalContext();

  const handleOptionChange = (event) => {
    setQuery(event.target.value);
    setSelectedOption(event.target.value)
  }
  const toggle = () => {
    if (mode === 'true') {
      setmode('false');
      setName('upperl');
    } else {
      setmode('true');
      setName('upperd');
    }
  }
  return (
    <div className="nav">
      <nav className={Name} id="upper">
        <ul>
          <li>
            <Link className='anchor' to='/'> Home</Link>
          </li>
          <li>
            <Link className='anchor' to='/About'> About</Link>
          </li>
          <li>
            <div className='anchor'>
              <select id="dropdown" value={selectedOption} onChange={handleOptionChange}>
                <option value="">Gener</option>
                <option value="Horror">Horror</option>
                <option value="Comedy">Comedy</option>
                <option value="Biography">Biography</option>
              </select>
            </div>
          </li>
          <label className="switch">
            <input onClick={toggle} type="checkbox" />
            <span className="slider"></span>
          </label>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
