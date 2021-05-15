import React,{useState} from 'react'
// import poster from '../../Assets/Hitesh.jpg'
// import Modal from '../Modal/Modal';
import './card.css'
import {useModal} from '../../context/Modals'

const IMG_API = "https://image.tmdb.org/t/p/w1280";
function Card(props) {
  const{movie}=props
  const {setopenmodal,setMovieid,setMoviedetails,movieDetails}=useModal()
  
  
 const clickhandler = ()=>{
     setopenmodal(true)
     setMovieid(movie.id)
     setMoviedetails({
         title:movie.original_title, 
         description:movie.overview , 
         language:movie.original_language,
         vote_average:movie.vote_average,
         date:movie.release_date,
         adult:movie.adult,
         poster:movie.poster_path,
       })
       console.log(movieDetails)
    }
    return (
       
        <div className="card" onClick={clickhandler}>
            <img className="card-img" src={ IMG_API + movie.poster_path} />
            <span className="card-name">{movie.original_title}</span>
            <span className="card-category">movie categories</span>
        </div>
           
        
        
    )
}

export default Card
