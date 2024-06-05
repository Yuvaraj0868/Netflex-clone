import React, { useEffect, useState } from 'react'
import "./Player.css"
import backarroeicon from "../../assets/back_arrow_icon.png"
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {


const navigate=useNavigate();


const{id}=useParams();


const[apiData,setApiData]=useState({
  name:"",
  key:"",
  published_at:"",
  typeof:""
})

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGVjMzU5ZmE5YjYxMzY5OWYxNDAyOWM5ZjA2MmVjYiIsInN1YiI6IjY2NjAzNmQ3MDkwMjJiY2E2ZmM5MGRkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UzcujLeewCA5sIe2tcRIrMPxLhvIkW-GANnmpgTKAdg'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  },[])
 

  return (
    <div className='player'>
      <img src={backarroeicon} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe width='90%' height='90%'
      src={`https://www.youtube.com/embed/${apiData.key}`} title='triler' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
       <p>{apiData. published_at.slice(0,10)}</p>
       <p>{apiData.name}</p> 
       <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
