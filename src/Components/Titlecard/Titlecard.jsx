import React, { useEffect, useRef, useState } from 'react'
import "./Titlecard.css"
import cards_data from "../../assets/cards/Cards_data"
import { Link } from 'react-router-dom'





const Titlecard = ({title,category}) => {

  const[apiData,setApiData]=useState([])

  const cardsRef=useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGVjMzU5ZmE5YjYxMzY5OWYxNDAyOWM5ZjA2MmVjYiIsInN1YiI6IjY2NjAzNmQ3MDkwMjJiY2E2ZmM5MGRkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UzcujLeewCA5sIe2tcRIrMPxLhvIkW-GANnmpgTKAdg'
    }
  };
  
  const handleWheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
  
  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel',handleWheel);
  },[])
  
  return (
    <div className='titlecards'> 
      <h2>{title?title:"Popular On Netflex"}</h2>
      <div className="cardlist" ref={cardsRef}>
        {apiData.map((card,index)=>{
          return <Link  to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default Titlecard
