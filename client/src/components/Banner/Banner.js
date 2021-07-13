import React,{ useState, useEffect } from 'react'
import axios from 'axios'

import BackgroundImage from '../../../assets/images/banner.jpeg'
import Flower from '../../../assets/images/blue.png'

const Banner = () => {
  const [profile, setProfile] = useState([])

  useEffect(() => {
    getProfile()
  }, [])

  const getProfile = () => {
    const profile = axios({
      method: 'GET',
      url: 'http://localhost:5000/profile'
    })
    .then(res => {
      console.log("profile", res.data)
      setProfile(res.data[0])
      })
    .catch(err => console.log(err));
    return profile;
  }

  return (
    <div>

      <div className="profile">
        <p className="profile-subtitle">{profile.subTitle}</p>
        <p className="profile-description">{profile.description}</p>
      </div>
      
        <div className="socials">
          <ul>
            <li>LinkedIn</li>
            <li>Fb</li>
            <li>github</li>
          </ul>
        </div>
      

    </div>
  )
}

export default Banner
