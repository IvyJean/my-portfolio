import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import Tooltip from 'react-tooltip-lite'

import Logo from '../../../assets/images/logo.png'

const Header = () => {
  const [fact, setFact] = useState('')

  useEffect(() => {
    // getFacts()
  }, [])


   const getFacts = () => {
      const list = axios({
        method: 'GET',
        url: 'https://random-words-with-pronunciation.p.rapidapi.com/word',
        headers: {
          'x-rapidapi-key': 'f274088a6fmsh9df76e7850c966fp1366fcjsn8aacdf39b976',
          'x-rapidapi-host': 'random-words-with-pronunciation.p.rapidapi.com'
        },
      })
        .then(res => console.log("data", res.data))
        .catch(err => console.log(err));
      return list;
  };
    


  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo-container">
          <img src={Logo} alt="logo" />
          <p>test</p>
        </div>
        <ul className="header-nav">
          <li>About</li>
          {/* <li>Experience</li>
          <li>Work</li> */}
          <li>Contact</li>
        </ul>
      </div>
    </header>
  )
}

export default Header