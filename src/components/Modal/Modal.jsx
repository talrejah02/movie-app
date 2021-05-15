import React from 'react'
import './Modal.css'
import {useModal} from '../../context/Modals'
function Modal({src}) {
    const {openmodal,setopenmodal,movieid,movieDetails}=useModal()
    const IMG_API = "https://image.tmdb.org/t/p/w1280";
     


    function closemodal(){
    setopenmodal(false)
    }

    // title:movie.original_title, 
    // description:movie.overview , 
    // language:movie.original_language,
    // vote_average:movie.vote_average,
    // date:movie.release_date,
    // adult:movie.adult,
    // poster:movie.poster_path,

    return (
        <div className="modal" >
        <div className="modal-content">
            <div className="modal-btn">

            <button type="button" onClick={closemodal}><svg classname="modal-svg" width="2.5rem" height="2.5rem" viewBox="0 0 24 24"><path d="M3.97 12c0 4.41 3.62 8.03 8.03 8.03c4.41 0 8.03-3.62 8.03-8.03c0-4.41-3.62-8.03-8.03-8.03c-4.41 0-8.03 3.62-8.03 8.03M2 12C2 6.46 6.46 2 12 2s10 4.46 10 10s-4.46 10-10 10S2 17.54 2 12m8.46-1V8L6.5 12l3.96 4v-3h7.04v-2" fill="#F9AB00"></path></svg></button>
            </div>
           <div className="modal-heading">
              <h2>{movieDetails.title}</h2>
           </div>

          <div className="content">
            <img className="modal-img" src={ IMG_API + movieDetails.poster} />
             <div className="modal-details">
             <p> <span>Release date:</span> <span className="details-yellow" >{movieDetails.date}</span> </p>
             <p> <span>langauge:</span> <span className="details-yellow" >{movieDetails.langauge}</span></p>
             <p> <span>IMDB: </span> <span className="details-yellow" > {movieDetails.vote_average}</span></p>
             <p> {movieDetails.adult && <span>18+</span>}</p>
            </div>
            <div className="modal-description">{movieDetails.description}</div>
          </div>


        </div> 

            
        </div>
    )
}

export default Modal
 