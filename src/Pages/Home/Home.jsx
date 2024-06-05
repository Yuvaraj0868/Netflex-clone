import React from 'react'
import "./Home.css"
import Navbar from "../../Components/Navbar/Navbar"
import hero from  "../../assets/hero_banner.jpg"
import hero_title from  "../../assets/hero_title.png"
import play_icon from  "../../assets/play_icon.png"
import info_icon from  "../../assets/info_icon.png"
import Titlecard from '../../Components/Titlecard/Titlecard'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero} alt="" className='banner-image'/>
        <div className="hero-caption">
          <img src={hero_title} alt=""  className='caption-img'/>
          <p>Discovering his ties to a secret ancient order, a young
            man living in in modern Istanbul embarks on a quest to sava the city from 
            an immortal enemy
          </p>
          <div className="herobtn">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <Titlecard />
        </div>
      </div>
      <div className="more-cards">
      <Titlecard title={"Blockbuster Movies"} category={"top_rated"}/>
      <Titlecard title={"Only On Netflex"} category={"popular"}/>
      <Titlecard title={"Upcoming"} category={"upcoming"}/>
      <Titlecard title={"Top Pics For you"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
